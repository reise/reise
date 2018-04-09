import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempleDataService } from '../temple-data.service';
import { Router } from '@angular/router';
import { User } from '../models/user-model';

@Component({
    selector: 'app-temples',
    templateUrl: './temples.component.html',
    styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {
    user: User;
    public temples: Array<any> = [];

    constructor(private _Router: Router, private _TempleDataService: TempleDataService) { }

    public ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        if (!this.user || !this.user.username) {
            this._Router.navigate(['/login']);
        }
        this._TempleDataService.getData().subscribe((response: any) => this.temples = JSON.parse(JSON.stringify(response.data)));
    }

    public book(temple: any): void {
        this._Router.navigate(['/temples', temple.id]);
    }
}