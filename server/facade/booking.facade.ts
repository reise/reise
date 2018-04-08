import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { BookingProvider } from "../providers/booking.provider";
import { BusProvider } from "../providers/bus.provider";
import { TempleProvider } from "../providers/temple.provider";
import { Booking, BookingSummary } from "../models/booking.model";
import { Bus, Availability } from "../models/bus.model";
import { Temple } from "../models/temple.model";

export namespace BookingFacade {

    export function getBookings(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Array<BookingSummary>> = new ApiResponse();
        BookingProvider.getBookings()
            .then((response: Array<BookingSummary>) => {
                apiResponse.data = response;
                res.locals.apiResponse = apiResponse;
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals.apiResponse = apiResponse;
                next();
            });
    }

    export function getBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        BookingProvider.getBooking(req.params.id)
            .then((response: Booking) => {
                apiResponse.data = response;
                res.locals.apiResponse = apiResponse;
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals.apiResponse = apiResponse;
                next();
            });
    }

    export function createBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        let booking: Booking = new Booking();
        booking.user = req.session.user;
        //parse date incase string is sent
        req.body.journeyDate = new Date(req.body.journeyDate);
        TempleProvider.getTemple(req.body.templeId)
            .then((temple: Temple) => {
                booking.temple = Temple.translate(temple, true);
                templeResolver(req, res, next, booking);
            })
            .catch((templeError: any) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [`Temple with temple id ${req.body.templeId} not found`];
                res.locals.apiResponse = apiResponse;
                next();
            });
    }

    export function updateBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        BookingProvider.updateBooking(req.body)
            .then((response: Booking) => {
                apiResponse.data = response;
                res.locals.apiResponse = apiResponse;
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals.apiResponse = apiResponse;
                next();
            });
    }

    export function deleteBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        BookingProvider.deleteBooking(req.query.id)
            .then((response: boolean) => {
                apiResponse.data = response;
                res.locals.apiResponse = apiResponse;
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals.apiResponse = apiResponse;
                next();
            });
    }

    function templeResolver(req: Request, res: Response, next: NextFunction, booking: Booking): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        if (!!booking.temple) {
            BusProvider.getBus(req.body.busId)
                .then((bus: Bus) => {
                    booking.bus = Bus.translate(bus, true);
                    busResolver(req, res, next, booking);
                })
                .catch((busError: any) => {
                    apiResponse.data = null;
                    apiResponse.status = false;
                    apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
                    res.locals.apiResponse = apiResponse;
                    next();
                });
        } else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Temple with temple id ${req.body.templeId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        }
    }

    function busResolver(req: Request, res: Response, next: NextFunction, booking: Booking): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        if (!booking.bus) {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        } else if (!checkAndUpdateAvailability(booking.bus, req.body.passengerCount, req.body.journeyDate)) {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus tickets are not available for ${req.body.passengerCount} passengers`];
            res.locals.apiResponse = apiResponse;
            next();
        } else {
            //update availability
            BusProvider.updateBus(booking.bus)
                .then((bus: Bus) => busUpdateResolver(req, res, next, booking))
                .catch((busError: any) => {
                    apiResponse.data = null;
                    apiResponse.status = false;
                    apiResponse.messages = [`Failed to book the trip, bus ${booking.bus.name} is unavailable`];
                    res.locals.apiResponse = apiResponse;
                    next();
                });
        }
    }

    function busUpdateResolver(req: Request, res: Response, next: NextFunction, booking: Booking): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        if (!!booking.bus) {
            //make sure availability is not saved in booking table
            booking.bus.availability = [];
            booking.journeyDate = req.body.journeyDate;
            booking.passengerCount = req.body.passengerCount;
            booking.remarks = req.body.remarks;
            booking.additionalInfo = req.body.additionalInfo;
            BookingProvider.createBooking(booking)
                .then((response: Booking) => {
                    apiResponse.data = response;
                    res.locals.apiResponse = apiResponse;
                    next();
                })
                .catch((error: string) => {
                    //revert allocated availability
                    checkAndUpdateAvailability(booking.bus, req.body.passengerCount, req.body.journeyDate, true)
                    BusProvider.updateBus(booking.bus)
                    apiResponse.data = null;
                    apiResponse.status = false;
                    apiResponse.messages = [error];
                    res.locals.apiResponse = apiResponse;
                    next();
                });
        } else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [`Bus with bus id ${req.body.busId} not found`];
            res.locals.apiResponse = apiResponse;
            next();
        }
    }

    function checkAndUpdateAvailability(bus: Bus, passengerCount: number, bookingDate: Date, isCancellation?: boolean): boolean {

        if (!bus.availability || !bus.availability.length) {
            return false;
        }

        let availability: Availability = bus.availability.find((availabilityItem: Availability) => {
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
}