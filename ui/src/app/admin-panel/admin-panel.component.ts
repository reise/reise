import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdminDataService } from '../admin-data.service';

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    public data:Array<any>= [];

   

  
 
  constructor(private _AdminDataService: AdminDataService) { }
    
  public ngOnInit(): void {
    this._AdminDataService.getData().subscribe((response: any) => this.data = JSON.parse(JSON.stringify(response.data)));
  
    }
 

  
}


