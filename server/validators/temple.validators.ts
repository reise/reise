import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";
import { Temple } from "../models/temple.model";

export namespace TempleValidator {

    export function validateGetTemple(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Temple> = new ApiResponse();

        if (!req.params) {
            response.status = false;
            response.messages.push(Validations.Temple.required);
            res.json(response);
            return;
        }

        if (!req.params.id) {
            response.status = false;
            response.messages.push(Validations.Temple.id);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateCreateTemple(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Temple> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.Temple.required);
            res.json(response);
            return;
        }

        if (!req.body.name) {
            response.status = false;
            response.messages.push(Validations.Temple.name);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateUpdateTemple(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Temple> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.Temple.required);
            res.json(response);
            return;
        }

        if (!req.body.id) {
            response.status = false;
            response.messages.push(Validations.Temple.id);
        }

        if (!req.body.name) {
            response.status = false;
            response.messages.push(Validations.Temple.name);
        }
        
        response.status ? next() : res.json(response);
        return;
    }
}