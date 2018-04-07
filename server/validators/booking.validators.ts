import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";
import { Temple } from "../models/temple.model";

export namespace BookingValidator {

    export function validateGetBooking(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.params) {
            response.status = false;
            response.messages.push(Validations.Booking.required);
            res.json(response);
            return;
        }

        if (!req.params.id) {
            response.status = false;
            response.messages.push(Validations.Booking.id.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateCreateBooking(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(Validations.Booking.templeId.required);
        }

        if (!req.body.userId) {
            response.status = false;
            response.messages.push(Validations.Booking.userId.required);
        }

        if (!req.body.templeName) {
            response.status = false;
            response.messages.push(Validations.Booking.templeName.required);
        }

        if (!req.body.userName) {
            response.status = false;
            response.messages.push(Validations.Booking.userName.required);
        }

        if (!parseInt(req.body.price)) {
            response.status = false;
            response.messages.push(Validations.Booking.price.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateUpdateBooking(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.id) {
            response.status = false;
            response.messages.push(Validations.Booking.id.required);
        }

        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(Validations.Booking.templeId.required);
        }

        if (!req.body.userId) {
            response.status = false;
            response.messages.push(Validations.Booking.userId.required);
        }

        if (!req.body.templeName) {
            response.status = false;
            response.messages.push(Validations.Booking.templeName.required);
        }

        if (!req.body.userName) {
            response.status = false;
            response.messages.push(Validations.Booking.userName.required);
        }

        if (!parseInt(req.body.price)) {
            response.status = false;
            response.messages.push(Validations.Booking.price.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}