import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempledetailsService } from '../templedetails.service';
import { User } from '../models/user-model';

@Component({
    selector: 'app-temple-details',
    templateUrl: './temple-details.component.html',
    styleUrls: ['./temple-details.component.css']
})
export class TempleDetailsComponent implements OnInit {
    public temple: any;
    public bus: any;
    public user: User;
    public templeId;
    public selectedDateSeats: number = 0;
    public paxCount: number = 1;;
    public journeyDate: string;
    public isDisabled: boolean;

    public constructor(private route: ActivatedRoute,
        private _TempledetailsService: TempledetailsService,
        private _Router: Router) { }

    public ngOnInit(): void {
        let templeId = this.route.snapshot.params.id;

        this._TempledetailsService.getData(templeId).subscribe((templeResponse: any) => {
            this.temple = JSON.parse(JSON.stringify(templeResponse.data));
            this._TempledetailsService.getBus(this.temple.name).subscribe((busResponse: any) => {
                this.bus = JSON.parse(JSON.stringify(busResponse.data));
                this.selectedDateSeats = this.bus.availability[0].availableSeats;
            });
        });

        this.user = JSON.parse(sessionStorage.getItem('user'));

        if (!this.user || !this.user.username) {
            this._Router.navigate(['/login']);
        }
    }

    public paxCountChanged(event: any): void {
        this.paxCount = event.target.selectedOptions[0].value.trim();
        this, this.isDisabled = this.paxCount > this.selectedDateSeats;
    }

    public dateChanged(event: any): void {
        this.selectedDateSeats = event.target.selectedOptions[0].value.trim();
        this.journeyDate = event.target.selectedOptions[0].innerText.trim();
        this, this.isDisabled = this.paxCount > this.selectedDateSeats;
    }

    public book(): void {
        this._TempledetailsService.bookBus({
            templeId: this.temple.id,
            busId: this.bus.id,
            userId: this.user.id,
            journeyDate: new Date(this.journeyDate),
            passengerCount: this.paxCount
        })
            .subscribe((response: any) => {
                console.log(response);
                if (!response.status) {
                    alert('booking failed');
                } else {
                    alert('Your Booking Has Been Successfully registered For comfrming tickete Plz Go to our nearest branch and Pay Before one day of Booking date.....  Thank you');
                    this._Router.navigate(['/']);
                }
            })
    }
}