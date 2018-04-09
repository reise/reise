"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_db_model_1 = require("../models/db/booking-db.model");
const booking_model_1 = require("../models/booking.model");
const db_constants_1 = require("../models/db/db-constants");
var BookingProvider;
(function (BookingProvider) {
    function getBookings() {
        return new Promise((resolve, reject) => {
            booking_db_model_1.BookingCollection.find({}, db_constants_1.DbSchema.Projections.Booking.GetAll)
                .sort({ name: 'asc' })
                .then((response) => {
                resolve(response.reduce((currList, item) => {
                    currList.push(booking_model_1.BookingSummary.translate(item));
                    return currList;
                }, []));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BookingProvider.getBookings = getBookings;
    function getBooking(id) {
        return new Promise((resolve, reject) => {
            booking_db_model_1.BookingCollection.findById(id)
                .then((response) => {
                resolve(booking_model_1.Booking.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BookingProvider.getBooking = getBooking;
    function createBooking(booking) {
        return new Promise((resolve, reject) => {
            booking_db_model_1.BookingCollection.create(booking)
                .then((response) => {
                resolve(booking_model_1.Booking.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BookingProvider.createBooking = createBooking;
    function updateBooking(booking) {
        return new Promise((resolve, reject) => {
            booking_db_model_1.BookingCollection.findByIdAndUpdate(booking.id, booking, { new: true })
                .then((response) => {
                resolve(booking_model_1.Booking.translate(response));
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    BookingProvider.updateBooking = updateBooking;
    function deleteBooking(id) {
        return new Promise((resolve, reject) => {
            booking_db_model_1.BookingCollection.findByIdAndRemove(id)
                .then((response) => {
                resolve(true);
            })
                .catch((error) => {
                reject(false);
            });
        });
    }
    BookingProvider.deleteBooking = deleteBooking;
})(BookingProvider = exports.BookingProvider || (exports.BookingProvider = {}));
//# sourceMappingURL=booking.provider.js.map