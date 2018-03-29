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
        this.user = this.user || new User();
    }

    public login(): void {

        if (!this.user || !this.user.username || !this.user.password) {
            return;
        }        

        this._Http
            .post('/api/user/login', this.user)
            .toPromise()
            .then((response: any) => {
                if (response.status) {
                    this._Router.navigate(['/']);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    console.log(this.user);
                }
            })
            .catch((error: any) => {
                console.log(error);
                
            });
    }
}
