import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from "../models/user-model";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public user: User;

    public constructor(private _HttpClient: HttpClient,
        private _Router: Router) { }

    public ngOnInit(): void {
        this.user = this.user || new User();
    }

    public register(): void {

        if (!User.checkPasswordmatch(this.user)) {
            return;
        }

        this._HttpClient
            .post('/api/user/register', this.user)
            .toPromise()
            .then((response: any) => {
                if (response.status) {
                    this._Router.navigate(['/']);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                }

                else{
                     
                    alert(response.messages);
                }
               
            })
            .catch((error: any) => {
                console.log(error);


            });
    }

    private validate(): boolean {
        return !!this.user;
    }

}