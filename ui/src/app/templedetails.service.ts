import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { templedata } from './templeinfo';


@Injectable()
export class TempledetailsService {

    public constructor(private http: HttpClient) { }

    public getData(templeId: string): Observable<any> {
        return this.http.get<templedata[]>('/api/temples/' + templeId);
    }

    public getBus(busName: string): Observable<any> {
        return this.http.get<templedata[]>('/api/buses/name/' + busName);
    }

    public bookBus(bookingRequest: any): Observable<any> {
        return this.http.put<any>('/api/bookings/create/', bookingRequest);
    }
}
