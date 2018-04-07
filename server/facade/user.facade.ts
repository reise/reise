import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { UserProvider } from "../providers/user.provider";
import { User } from "../models/user.model";

export namespace UserFacade {

    export function getLoggedInUser(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<User> = new ApiResponse();
        if (req.session.user && req.session.user.id) {
            apiResponse.data = req.session.user;
        } else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = ["no logged in user found!"];
        }
        res.locals = {
            apiResponse: apiResponse
        };
        next();
    }

    export function login(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<User> = new ApiResponse();
        UserProvider.login(req.body)
            .then((response: User) => {
                apiResponse.data = response;
                // set user in session
                req.session.user = response;
                res.locals = {
                    apiResponse: apiResponse
                };
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals = {
                    apiResponse: apiResponse
                };
                next();
            });
    }

    export function register(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<User> = new ApiResponse();
        UserProvider.register(req.body)
            .then((response: User) => {
                apiResponse.data = response;
                //set user in session
                req.session.user = response;
                res.locals = {
                    apiResponse: apiResponse
                };
                next();
            })
            .catch((error: string) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = [error];
                res.locals = {
                    apiResponse: apiResponse
                };
                next();
            });
    }

    export function logout(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        //copy session id before destroying session
        let sessionId: string = req.sessionID;
        req.session.destroy((error: any) => {
            if (error) {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = ["error occurred while logging out the user"];
                res.json(apiResponse);
            } else {
                apiResponse.data = true;
                res.locals = {
                    apiResponse: apiResponse,
                    sessionId: sessionId
                };
                res.json(apiResponse);
            }
        });
    }
}