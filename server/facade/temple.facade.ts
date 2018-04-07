import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { TempleProvider } from "../providers/temple.provider";
import { Temple } from "../models/temple.model";

export namespace TempleFacade {

    export function getTemples(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Array<Temple>> = new ApiResponse();
        TempleProvider.getTemples()
            .then((response: Array<Temple>) => {
                apiResponse.data = response;
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

    export function getTemple(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Temple> = new ApiResponse();
        TempleProvider.getTemple(req.params.id)
            .then((response: Temple) => {
                apiResponse.data = response;
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

    export function createTemple(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Temple> = new ApiResponse();
        TempleProvider.createTemple(req.body)
            .then((response: Temple) => {
                apiResponse.data = response;
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

    export function updateTemple(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Temple> = new ApiResponse();
        TempleProvider.updateTemple(req.body)
            .then((response: Temple) => {
                apiResponse.data = response;
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

    export function deleteTemple(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        TempleProvider.deleteTemple(req.params.id)
            .then((response: boolean) => {
                apiResponse.data = response;
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
}