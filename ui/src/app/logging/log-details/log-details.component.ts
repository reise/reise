import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-details',
    templateUrl: './log-details.component.html',
    styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

    public constructor(private _Router: Router) {
        
    }

    public ngOnInit(): void {
    }

}