import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { BookingProvider } from "../providers/booking.provider";
import { Booking } from "../models/booking.model";

export namespace BookingFacade {

    export function getBookings(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Array<Booking>> = new ApiResponse();
        BookingProvider.getBookings()
            .then((response: Array<Booking>) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.json(apiResponse);
            });
    }

    export function getBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        BookingProvider.getBooking(req.params.id)
            .then((response: Booking) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.json(apiResponse);
            });
    }

    export function createBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        BookingProvider.createBooking(req.body)
            .then((response: Booking) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.json(apiResponse);
            });
    }

    export function updateBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Booking> = new ApiResponse();
        BookingProvider.updateBooking(req.body)
            .then((response: Booking) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.json(apiResponse);
            });
    }

    export function deleteBooking(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        BookingProvider.deleteBooking(req.query.id)
            .then((response: boolean) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.json(apiResponse);
            });
    }
}