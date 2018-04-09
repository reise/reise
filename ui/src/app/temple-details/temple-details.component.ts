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
    public info: any;
    public user: User;
    public templeId;

    public constructor(private route: ActivatedRoute,
        private _TempledetailsService: TempledetailsService,
        private _Router: Router) { }

    public ngOnInit(): void {
        let templeId = this.route.snapshot.params.id;

        this._TempledetailsService.getData(templeId).subscribe((response: any) => 
            this.info = JSON.parse(JSON.stringify(response.data)));

        this.user = JSON.parse(sessionStorage.getItem('user'));
        
        if (!this.user || !this.user.username) {
            this._Router.navigate(['/login']);
        }
    }
}