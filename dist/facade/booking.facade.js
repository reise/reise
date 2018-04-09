"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const booking_provider_1 = require("../providers/booking.provider");
const bus_provider_1 = require("../providers/bus.provider");
const temple_provider_1 = require("../providers/temple.provider");
const booking_model_1 = require("../models/booking.model");
const bus_model_1 = require("../models/bus.model");
const temple_model_1 = require("../models/temple.model");
var BookingFacade;
(function (BookingFacade) {
    function getBookings(req, res, next) {
        let apiResponse = new response_model_1.Response();
        booking_provider_1.BookingProvider.getBookings()
            .then((response) => {
            apiResponse.data = response;
            res.locals.apiResponse = apiResponse;
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals.apiResponse = apiResponse;
            next();
        });
    }
    BookingFacade.getBookings = getBookings;
    function getBooking(req, res, next) {
        let apiResponse = new response_model_1.Response();
        booking_provider_1.BookingProvider.getBooking(req.params.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals.apiResponse = apiResponse;
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals.apiResponse = apiResponse;
            next();
        });
    }
    BookingFacade.getBooking = getBooking;
    function createBooking(req, res, next) {
        let apiResponse = new response_model_1.Response();
        let booking = new booking_model_1.Booking();
        booking.user = req.session.user;
        //parse date incase string is sent
        req.body.journeyDate = new Date(req.body.journeyDate);
        temple_provider_1.TempleProvider.getTemple(req.body.templeId)
            .then((temple) => {
            booking.temple = temple_model_1.Temple.translate(temple, true);
            templeResolver(req, res, next, booking);
        })
            .catch((templeError) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Temple with temple id ${req.body.templeId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        });
    }
    BookingFacade.createBooking = createBooking;
    function updateBooking(req, res, next) {
        let apiResponse = new response_model_1.Response();
        booking_provider_1.BookingProvider.updateBooking(req.body)
            .then((response) => {
            apiResponse.data = response;
            res.locals.apiResponse = apiResponse;
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals.apiResponse = apiResponse;
            next();
        });
    }
    BookingFacade.updateBooking = updateBooking;
    function deleteBooking(req, res, next) {
        let apiResponse = new response_model_1.Response();
        booking_provider_1.BookingProvider.deleteBooking(req.params.id)
            .then((response) => {
            apiResponse.data = response;
            res.locals.apiResponse = apiResponse;
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals.apiResponse = apiResponse;
            next();
        });
    }
    BookingFacade.deleteBooking = deleteBooking;
    function templeResolver(req, res, next, booking) {
        let apiResponse = new response_model_1.Response();
        if (!!booking.temple) {
            bus_provider_1.BusProvider.getBus(req.body.busId)
                .then((bus) => {
                booking.bus = bus_model_1.Bus.translate(bus, true);
                busResolver(req, res, next, booking);
            })
                .catch((busError) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
                res.locals.apiResponse = apiResponse;
                next();
            });
        }
        else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Temple with temple id ${req.body.templeId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        }
    }
    function busResolver(req, res, next, booking) {
        let apiResponse = new response_model_1.Response();
        if (!booking.bus) {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        }
        else if (!checkAndUpdateAvailability(booking.bus, req.body.passengerCount, req.body.journeyDate)) {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus tickets are not available for ${req.body.passengerCount} passengers`];
            res.locals.apiResponse = apiResponse;
            next();
        }
        else {
            //update availability
            bus_provider_1.BusProvider.updateBus(booking.bus)
                .then((bus) => busUpdateResolver(req, res, next, booking))
                .catch((busError) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [`Failed to book the trip, bus ${booking.bus.name} is unavailable`];
                res.locals.apiResponse = apiResponse;
                next();
            });
        }
    }
    function busUpdateResolver(req, res, next, booking) {
        let apiResponse = new response_model_1.Response();
        if (!!booking.bus) {
            //make sure availability is not saved in booking table
            booking.bus.availability = [];
            booking.journeyDate = req.body.journeyDate;
            booking.passengerCount = req.body.passengerCount;
            booking.remarks = req.body.remarks;
            booking.additionalInfo = req.body.additionalInfo;
            booking_provider_1.BookingProvider.createBooking(booking)
                .then((response) => {
                apiResponse.data = response;
                res.locals.apiResponse = apiResponse;
                next();
            })
                .catch((error) => {
                //revert allocated availability
                checkAndUpdateAvailability(booking.bus, req.body.passengerCount, req.body.journeyDate, true);
                bus_provider_1.BusProvider.updateBus(booking.bus);
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals.apiResponse = apiResponse;
                next();
            });
        }
        else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        }
    }
    function checkAndUpdateAvailability(bus, passengerCount, bookingDate, isCancellation) {
        if (!bus.availability || !bus.availability.length) {
            return false;
        }
        let availability = bus.availability.find((availabilityItem) => {
            return availabilityItem.date.getFullYear() === bookingDate.getFullYear() &&
                availabilityItem.date.getMonth() === bookingDate.getMonth() &&
                availabilityItem.date.getDate() === bookingDate.getDate();
        });
        if (!availability) {
            return false;
        }
        if (isCancellation) {
            availability.availableSeats += passengerCount;
            return true;
        }
        if (availability.availableSeats >= passengerCount) {
            availability.availableSeats -= passengerCount;
            return true;
        }
        return false;
    }
})(BookingFacade = exports.BookingFacade || (exports.BookingFacade = {}));
//# sourceMappingURL=booking.facade.js.map