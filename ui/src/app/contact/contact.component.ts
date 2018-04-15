import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    constructor(private _Router: Router) { }

    public ngOnInit(): void {
    }
}
