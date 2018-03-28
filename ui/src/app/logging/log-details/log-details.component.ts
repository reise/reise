import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-log-details',
    templateUrl: './log-details.component.html',
    styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

    public constructor(private _Router: Router, private _ActivatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        console.log(this._ActivatedRoute.snapshot.queryParams);
    }
}