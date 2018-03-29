import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempleDataService } from '../temple-data.service';

@Component({
    selector: 'app-temples',
    templateUrl: './temples.component.html',
    styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {

    public temples: Array<any> = [];

    constructor(private _TempleDataService: TempleDataService) { }

    public ngOnInit(): void {
        this._TempleDataService.getData().subscribe((response: any) => this.temples = JSON.parse(JSON.stringify(response.data)));
    }

    public book(temple: any): void {
        let user: any = JSON.parse(sessionStorage.getItem('user'));
        this._TempleDataService.bookTemple({
            templeId: temple.id,
            userId: user.id,
            templeName: temple.TempleName,
            userName: user.name,
            price: temple.Price
        }).subscribe((response: any) => alert('the temple has been booked!! An email has been sent to the registered email id!'));
    }
}