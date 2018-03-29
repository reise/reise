import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    public bookings: Array<any>;

    public constructor(private _Router: Router) { }

    public ngOnInit(): void {
        let user: any = JSON.parse(sessionStorage.getItem('user'));
        if (!user.isAdmin) {
            this._Router.navigate(['']);
        } else {
            this.getBookings();
        }
    }

    public getBookings(): void {

    }
}