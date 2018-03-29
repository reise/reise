import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { admindata } from './admindata';

@Injectable()

export class AdminDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
      return this.http.get<admindata[]>('/api/temples/get-bookings');
  }

}
