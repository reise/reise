import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { User } from "../models/user.model";
import { Validations } from "./validation.messages";

export namespace UserValidator {

    export function validateLogin(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();

        if (req.session && req.session.user && req.session.user.id) {
            response.status = false;
            response.messages.push(Validations.User.alreadyLoggedIn.required);
            res.json(response);
            return;
        }

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.username && !req.body.email) {
            response.status = false;
            response.messages.push(Validations.User.username.required);
        }

        if (!req.body.password) {
            response.status = false;
            response.messages.push(Validations.User.password.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateRegister(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();

        if (req.session && req.session.user && req.session.user.id) {
            response.status = false;
            response.messages.push(Validations.User.alreadyLoggedIn.required);
            res.json(response);
            return;
        }

        if (!req.body) {
            response.status = false;
            response.messages.push(Validations.User.required);
            res.json(response);
            return;
        }

        if (!req.body.username) {
            response.status = false;
            response.messages.push(Validations.User.username.required);
        }

        if (!req.body.name) {
            response.status = false;
            response.messages.push(Validations.User.name.required);
        }

        if (!req.body.password) {
            response.status = false;
            response.messages.push(Validations.User.password.required);
        }

        if (req.body.username.length < 5) {
            response.status = false;
            response.messages.push(Validations.User.username.minLength);
        }

        if (req.body.password.length < 6) {
            response.status = false;
            response.messages.push(Validations.User.password.minLength);
        }

        let regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        if (!regex.test(req.body.email)) {
            response.status = false;
            response.messages.push(Validations.User.email.invalid);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateUser(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();

        if (!req.session || !req.session.user || !req.session.user.id) {
            response.status = false;
            response.messages.push(Validations.User.userNotFound.required);
        }

        response.status ? next() : res.json(response);
        return;
    }

    export function validateAdmin(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();

        if (!req.session || !req.session.user || !req.session.user.isAdmin) {
            response.status = false;
            response.messages.push(Validations.User.isAdmin.required);
        }

        response.status ? next() : res.json(response);
        return;
    }
}