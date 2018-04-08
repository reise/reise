import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
user:User;
  constructor(private _Router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (!this.user || !this.user.username) {
        this._Router.navigate(['/login']);
    }

  }

}
