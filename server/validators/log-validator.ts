import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";
import { Log } from "../models/log.model";

export namespace LogValidator {

    export function validateSaveLog(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Log> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.user.required);
            res.json(response);
            return;
        }

        if (!req.body.url) {
            response.status = false;
            response.messages.push(Validations.log.url.required);
        }

        if (!req.body.request) {
            response.status = false;
            response.messages.push(Validations.log.request.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}