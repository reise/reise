import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { admindata } from './admindata';

@Injectable()

export class AdminDataService {

    public constructor(private http: HttpClient) { }

    public getBookings(): Observable<any> {
        return this.http.get<admindata[]>('/api/bookings/all');
    }

    public deleteBooking(id: string): Observable<any> {
        return this.http.delete<boolean>('/api/bookings/' + id);
    }
}
