import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse, Page } from "../models/response.model";
import { LogsProvider } from "../providers/logs.provider";
import { Log } from "../models/log.model";

export namespace LogsFacade {

    export function getLogs(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Page<Log>> = new ApiResponse();
        LogsProvider.getLogs(req.body)
            .then((response: Page<Log>) => {
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

    export function getLogsBySesionId(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Page<Log>> = new ApiResponse();
        LogsProvider.getLogsBySessionId(req.params.sessionId, req.body)
            .then((response: Page<Log>) => {
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

    export function getLog(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Log> = new ApiResponse();
        LogsProvider.getLog(req.params.id)
            .then((response: Log) => {
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

    export function createLog(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Log> = new ApiResponse();
        LogsProvider.createLog(req.body)
            .then((response: Log) => {
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

    export function updateLog(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<Log> = new ApiResponse();
        LogsProvider.updateLog(req.body)
            .then((response: Log) => {
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

    export function deleteLog(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<boolean> = new ApiResponse();
        LogsProvider.deleteLog(req.params.id)
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

    //middleware function used by other routes to dump logs.
    export function dumpLog(req: Request, res: Response, next: NextFunction): void {
        if (!req.session) {
            res.json((res.locals && res.locals.apiResponse) ? res.locals.apiResponse : null);
        }
        res.locals.apiResponse.sessionID = req.sessionID;
        let log: Log = {
            sessionId: req.sessionID || res.locals.sessionId,
            method: req.method,
            url: `${req.baseUrl}${req.url}`,
            request: req.body,
            response: (res.locals && res.locals.apiResponse) ? res.locals.apiResponse : null,
            status: res.locals.apiResponse.status ? "Success" : "Failure",
            metadata: res.locals.metadata
        }
        //async log dump
        LogsProvider.createLog(log);
        res.json(log.response);
    }
}