import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { Validations } from "./validation.messages";
import { Log } from "../models/log.model";

export namespace LogValidator {

    export function validateGetLog(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Log> = new ApiResponse();

        if (!req.params) {
            response.status = false;
            response.messages.push(Validations.Log.required);
            res.json(response);
            return;
        }

        if (!req.params.id) {
            response.status = false;
            response.messages.push(Validations.Log.id.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateGetSessionLogs(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Log> = new ApiResponse();

        if (!req.params) {
            response.status = false;
            response.messages.push(Validations.Log.required);
            res.json(response);
            return;
        }

        if (!req.params.sessionId) {
            response.status = false;
            response.messages.push(Validations.Log.sessionId.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateSaveLog(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<Log> = new ApiResponse();

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.url) {
            response.status = false;
            response.messages.push(Validations.Log.url.required);
        }

        if (!req.body.request) {
            response.status = false;
            response.messages.push(Validations.Log.request.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}