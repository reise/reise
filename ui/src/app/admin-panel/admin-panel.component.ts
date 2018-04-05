import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdminDataService } from '../admin-data.service';
import { User } from '../models/user-model';
@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    public data:Array<any>= [];
    public user;
   

  
 
  constructor(private _AdminDataService: AdminDataService,private _Router: Router) { }
    
  public ngOnInit(): void {
    this._AdminDataService.getData().subscribe((response: any) => this.data = JSON.parse(JSON.stringify(response.data)));
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (!this.user || !this.user.isAdmin) {
        this._Router.navigate(['/login']);
    }
    }
 

  
}


