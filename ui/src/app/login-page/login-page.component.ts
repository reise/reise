import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../login-api.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit { 
  public Logins;
 


  constructor(private _LoginApiService : LoginApiService ) { }

  ngOnInit() {

   this.getLogin();

  }

  getLogin() {
      this._LoginApiService.getLogin().subscribe(
        // the first argument is a function which runs on success
        data => { this.Logins = data},
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => console.log('done loading Loginss')
      );
    }

    createLogin(Login) {
      let Logins = {name: name};
      this._LoginApiService.createLogin(Logins).subscribe(
         data => {
           // refresh the list
           this.getLogin();
           return true;
         },
         error => {
           console.error("Error saving Logins!");
           return Observable.throw(error);
         }
      );
    }
  
    updateLogin(Logins) {
      this._LoginApiService.updateLogin(Logins).subscribe(
         data => {
           // refresh the list
           this.getLogin();
           return true;
         },
         error => {
           console.error("Error saving Logins!");
           return Observable.throw(error);
         }
      );
    }
  
    deleteLogin(Logins) {
      if (confirm("Are you sure you want to delete " + Logins.name + "?")) {
        this._LoginApiService.deleteLogin(Logins).subscribe(
           data => {
             // refresh the list
             this.getLogin();
             return true;
           },
           error => {
             console.error("Error deleting Logins!");
             return Observable.throw(error);
           }
        );
      }
    }


}
