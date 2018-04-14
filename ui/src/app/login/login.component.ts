import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public user: User;
    public response: any;

    public constructor(private _Http: HttpClient,
        private _Router: Router) {
        this.form = new FormGroup({
            username: new FormControl('', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required
            ])
        });
    }

    public ngOnInit(): void {
        let user: User = JSON.parse(sessionStorage.getItem('user'));
        this.user = user || new User();
        if (!!user && !!user.id) {
            this._Router.navigate([this.user.isAdmin ? '/user-admin' : '']);
        }
    }

    public login(): void {

        if (!this.form.valid) {
            return;
        }

        this._Http
            .post('/api/user/login', this.form.value)
            .toPromise()
            .then((response: any) => {
                if (!response.status) {
                    this.response = {
                        status: response.status,
                        messages: response.messages
                    };

                } else {
                    this._Router.navigate([response.data.isAdmin ? '/user-admin' : '']);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                }
            })
            .catch((error: any) => {
                this.response = {
                    status: false,
                    messages: [error]
                };
            });
    }
}
