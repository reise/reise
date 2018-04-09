import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { BusProvider } from "../providers/bus.provider";
import { Bus } from "../models/bus.model";

export namespace BusFacade {

    export function getBuses(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Array<Bus>> = new ApiResponse();
        BusProvider.getBuses()
            .then((response: Array<Bus>) => {
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

    export function getBus(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Bus> = new ApiResponse();
        BusProvider.getBus(req.params.id)
            .then((response: Bus) => {
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

    export function createBus(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Bus> = new ApiResponse();
        BusProvider.createBus(req.body)
            .then((response: Bus) => {
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

    export function updateBus(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Bus> = new ApiResponse();
        BusProvider.updateBus(req.body)
            .then((response: Bus) => {
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

    export function deleteBus(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        BusProvider.deleteBus(req.query.id)
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