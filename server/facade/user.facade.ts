import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { UserProvider } from "../providers/user.provider";
import { User } from "../models/user.model";

export namespace UserFacade {

    export function login(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();
        UserProvider.login(req.body)
            .then((dbResponse: User) => {
                response.data = dbResponse;
                res.json(response);
            })
            .catch((error: any) => {
                response.data = null;
                response.status = false;
                response.messages = error;
                res.json(response);
            });
    }

    export function register(req: Request, res: Response, next: NextFunction): void {
        let response: ApiResponse<User> = new ApiResponse();
        UserProvider.register(req.body)
            .then((dbResponse: User) => {
                response.data = dbResponse;
                res.json(response);
            })
            .catch((error: any) => {
                response.data = null;
                response.status = false;
                response.messages = error;
                res.json(error);
            });
    }
}