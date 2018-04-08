import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempledetailsService } from '../templedetails.service';
import { Router } from '@angular/router';
import { User } from '../models/user-model';


@Component({
  selector: 'app-temple-datails',
  templateUrl: './temple-datails.component.html',
  styleUrls: ['./temple-datails.component.css']
})
export class TempleDatailsComponent implements OnInit {
  public info: Array<any> = [];
  user: User;
  public templeId;
  constructor(private route : ActivatedRoute, private _TempledetailsService:TempledetailsService, private _Router:Router ) { }

  ngOnInit() {
    
    
    let templeId = this.route.snapshot.paramMap.get('id');

    this._TempledetailsService.getData(templeId).subscribe((response: any) => this.info = JSON.parse(JSON.stringify(response.data)));

    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (!this.user || !this.user.username) {
        this._Router.navigate(['/login']);
    }
  }

}
