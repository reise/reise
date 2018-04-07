import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempledetailsService } from '../templedetails.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-temple-datails',
  templateUrl: './temple-datails.component.html',
  styleUrls: ['./temple-datails.component.css']
})
export class TempleDatailsComponent implements OnInit {
  public info: Array<any> = [];
 
  public templeId;
  constructor(private route : ActivatedRoute, private _TempledetailsService:TempledetailsService ) { }

  ngOnInit() {

    let templeId = this.route.snapshot.paramMap.get('id');

    this._TempledetailsService.getData(templeId).subscribe((response: any) => this.info = JSON.parse(JSON.stringify(response.data)));


  }

}
