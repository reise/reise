import { Request, Response, NextFunction } from "express";
import { Response as ApiResponse } from "../models/response.model";
import { TempleProvider } from "../providers/temple.provider";

export namespace TempleFacade {

    export function getTemples(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<any> = new ApiResponse();
        TempleProvider.getTemples()
            .then((response: Array<any>) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: any) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = error;
                res.json(apiResponse);
            });
    }

    export function getTempleBookings(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<any> = new ApiResponse();
        TempleProvider.getTempleBookings()
            .then((response: Array<any>) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: any) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = error;
                res.json(apiResponse);
            });
    }

    export function bookTemple(req: Request, res: Response, next: NextFunction): void {
        let apiResponse: ApiResponse<any> = new ApiResponse();
        TempleProvider.bookTemple(req.body)
            .then((response: Array<any>) => {
                apiResponse.data = response;
                res.json(apiResponse);
            })
            .catch((error: any) => {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = error;
                res.json(apiResponse);
            });        
    }
}