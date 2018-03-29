import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { templedata } from './templeinfo';

@Injectable()
export class TempleDataService {

    constructor(private http: HttpClient) { }

    public getData(): Observable<any> {
        return this.http.get<templedata[]>('/api/temples/all');
    }

    public bookTemple(bookRequest: any): Observable<any> {
        return this.http.post<templedata[]>('/api/temples/book', bookRequest);
    }
}
