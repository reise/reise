import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";

export namespace TempleValidator {

    export function validateTempleBooking(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<any> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.user.required);
            res.json(response);
            return;
        }

        if (!req.body.templeId) {
            response.status = false;
            response.messages.push(Validations.temple.templeId.required);
        }

        if (!req.body.userId) {
            response.status = false;
            response.messages.push(Validations.temple.userId.required);
        }

        if (!req.body.templeName) {
            response.status = false;
            response.messages.push(Validations.temple.templeName.required);
        }

        if (!req.body.userName) {
            response.status = false;
            response.messages.push(Validations.temple.userName.required);
        }

        if (!parseInt(req.body.price)) {
            response.status = false;
            response.messages.push(Validations.temple.userName.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}