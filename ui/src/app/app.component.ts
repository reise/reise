import { Component } from '@angular/core';
import { LoginApiService } from './login-api.service';
import {Observable} from 'rxjs/Rx';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';
}
