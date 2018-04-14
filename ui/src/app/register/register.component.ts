import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from "../models/user-model";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public user: User;
    public response: any;
    public passwordMatching: boolean = true;

    public constructor(private _HttpClient: HttpClient,
        private _Router: Router) {

        this.form = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            city: new FormControl('Latur', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            repeatPassword: new FormControl('', [
                Validators.required,
            ]),
        });
    }

    public ngOnInit(): void {
        this.user = this.user || new User();
    }
    
    private isPasswordMatching(): void {
        this.passwordMatching = this.form.controls.password.value === this.form.controls.repeatPassword.value;
    }
    
    public register(): void {
        this.isPasswordMatching();
        if (!this.form.valid || !this.passwordMatching) {
            return;
        }
        this._HttpClient
            .post('/api/user/register', this.form.value)
            .toPromise()
            .then((response: any) => {
                if (!response.status) {
                    this.response = {
                        status: response.status,
                        messages: response.messages
                    };
                } else {
                    this._Router.navigate(['/']);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}