import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Response } from "../models/response.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseFacade {

    public parseResponse<T>(observableResponse: Observable<Response<T>>): Promise<T> {
        return new Promise<T>((resolve: Function, reject: Function) => {
            observableResponse.toPromise().then(this.handleSuccess).catch(this.handleError);
        });
    }

    public handleSuccess<T>(response: Response<T>): Promise<T> {
        return new Promise<T>((resolve: Function, reject: Function) => {
            if (response.status) {
                return resolve(response.data);
            } else {
                //Pop the error message
            }
        });
    }

    public handleError(error: any): Promise<any> {
        //Pop the error message
        return Promise.reject(error);
    }
}