import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TempleDataService } from '../temple-data.service';

@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {

   public temp = [];
  

  constructor(private templedatails: TempleDataService ) { }

  ngOnInit() {
  this.templedatails.getData().subscribe(data => this.temp = JSON.parse(JSON.stringify(data)));
   
  }

}
