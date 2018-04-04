import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;

    public constructor(private _Http: HttpClient,
        private _Router: Router) { }

    public ngOnInit(): void {
        let user: User = JSON.parse(sessionStorage.getItem('user'));
        this.user = user || new User();
        if (!!user && !!user.id) {            
            this._Router.navigate([this.user.isAdmin ? '/user-admin' : '']);
        }
    }

    public login(): void {

        if (!this.user || !this.user.username || !this.user.password) {
            return;
        }

        this._Http
            .post('/api/user/login', this.user)
            .toPromise()
            .then((response: any) => {
                if (!response && !response.status) {
                    //show messgae
                    return;
                }
                this._Router.navigate([response.data.isAdmin ? '/user-admin' : '']);
                sessionStorage.setItem('user', JSON.stringify(response.data));
            })
            .catch((error: any) => {
                //show messgae
                console.log(error);
            });
    }
}
