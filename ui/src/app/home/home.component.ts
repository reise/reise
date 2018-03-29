import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user: User;

    public constructor(private _Router: Router,
        private _HttpClient: HttpClient) { }

    public ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        if (!this.user || !this.user.username) {
            this._Router.navigate(['/login']);
        }
    }

    
}