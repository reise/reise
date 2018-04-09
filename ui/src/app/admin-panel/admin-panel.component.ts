import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdminDataService } from '../admin-data.service';
import { User } from '../models/user-model';

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
    public bookings: Array<any> = [];
    public user;

    constructor(private _AdminDataService: AdminDataService,
        private _Router: Router) { }

    public ngOnInit(): void {

        this._AdminDataService.getBookings().subscribe((response: any) =>
            this.bookings = JSON.parse(JSON.stringify(response.data)));

        this.user = JSON.parse(sessionStorage.getItem('user'));

        if (!this.user || !this.user.isAdmin) {
            this._Router.navigate(['/login']);
        }
    }

    public isPastDate(date: string): boolean {
        let todaysDate: Date = new Date();
        let diff: number = Math.floor((Date.parse(date) - Date.parse(todaysDate.toDateString())) / 86400000);
        return diff > 0;
    }

    public deleteBooking(id: string): void {
        this._AdminDataService.deleteBooking(id)
            .subscribe((response: any) => {
                if (response.status) {
                    this.bookings = this.bookings.filter((booking: any) => {
                        return booking.id !== id;
                    });
                } else {
                    alert("booking couldn't be deleted");
                }
            });
    }
}