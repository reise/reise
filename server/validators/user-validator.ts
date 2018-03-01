import { Response } from "../models/response.model";

export namespace UserValidator {

    export function validateLogin<T>(request:T): Response<T> {
        let response: Response<T> = new Response();


        return response;
    }

}