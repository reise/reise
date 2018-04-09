import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public user: User;

    public constructor(private _Router: Router,
        private _HttpClient: HttpClient) { }

    public ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }

    public logout(): void {
        this._HttpClient
            .post('/api/user/logout', null)
            .toPromise()
            .then((response: any) => {
                if (response.status) {
                    sessionStorage.removeItem('user');
                    this._Router.navigate(['/login']);
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }


}
