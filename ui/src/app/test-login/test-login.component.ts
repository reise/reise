import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-test-login',
    templateUrl: './test-login.component.html',
    styleUrls: ['./test-login.component.css']
})
export class TestLoginComponent implements OnInit {

    public response: any;
    public isValid: boolean = true;

    public constructor(private _Http: HttpClient) { }

    public ngOnInit(): void {

    }

    public login(username: HTMLInputElement, password: HTMLInputElement): void {
        this._Http.post('/api/user/login', {
            username: username.value,
            password: password.value
        })
        .toPromise()
        .then((response: any) => {
            this.response = response;
            this.isValid = response && response.status;
        })
        .catch((error: any) => {
            this.response = error;
            this.isValid = false;
        });
    }
}
