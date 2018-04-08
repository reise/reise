import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";
import { Temple } from "../models/temple.model";

export namespace BusValidator {

    export function validateGetBus(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.params) {
            response.status = false;
            response.messages.push(Validations.Bus.required);
            res.json(response);
            return;
        }

        if (!req.params.id) {
            response.status = false;
            response.messages.push(Validations.Bus.id.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateCreateBus(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.name) {
            response.status = false;
            response.messages.push(Validations.Bus.name.required);
        }

        if (!req.body.number) {
            response.status = false;
            response.messages.push(Validations.Bus.number.required);
        }

        if (!req.body.arrivalTime) {
            response.status = false;
            response.messages.push(Validations.Bus.arrivalTime.required);
        }

        if (!req.body.departureTime) {
            response.status = false;
            response.messages.push(Validations.Bus.departureTime.required);
        }

        if (!req.body.sourceStation) {
            response.status = false;
            response.messages.push(Validations.Bus.sourceStation.required);
        }

        if (!req.body.destinationStation) {
            response.status = false;
            response.messages.push(Validations.Bus.destinationStation.required);
        }

        if (!req.body.fare) {
            response.status = false;
            response.messages.push(Validations.Bus.fare.required);
        }

        if (!req.body.totalSeats) {
            response.status = false;
            response.messages.push(Validations.Bus.totalSeats.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateUpdateBus(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.id) {
            response.status = false;
            response.messages.push(Validations.Bus.id.required);
        }

        if (!req.body.name) {
            response.status = false;
            response.messages.push(Validations.Bus.name.required);
        }

        if (!req.body.number) {
            response.status = false;
            response.messages.push(Validations.Bus.number.required);
        }

        if (!req.body.arrivalTime) {
            response.status = false;
            response.messages.push(Validations.Bus.arrivalTime.required);
        }

        if (!req.body.departureTime) {
            response.status = false;
            response.messages.push(Validations.Bus.departureTime.required);
        }

        if (!req.body.sourceStation) {
            response.status = false;
            response.messages.push(Validations.Bus.sourceStation.required);
        }

        if (!req.body.destinationStation) {
            response.status = false;
            response.messages.push(Validations.Bus.destinationStation.required);
        }

        if (!req.body.fare) {
            response.status = false;
            response.messages.push(Validations.Bus.fare.required);
        }

        if (!req.body.totalSeats) {
            response.status = false;
            response.messages.push(Validations.Bus.totalSeats.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}