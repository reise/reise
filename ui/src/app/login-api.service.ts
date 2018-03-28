import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginApiService {
  
  constructor(private http : HttpClient) { }
  getLogin() {
    return this.http.get('/api/user/login');

  }
  
  // send a POST request to the API to create a new data object
  createLogin(Login) {
    let body = JSON.stringify(Login);
    return this.http.post('/api/user/login', body, httpOptions)
}

// send a PUT request to the API to update a data object
updateLogin(Login) {
    let body = JSON.stringify(Login);
    return this.http.put('/api/user/login' + Login.id, body, httpOptions);
}

// send a DELETE request to the API to delete a data object
deleteLogin(Login) {
    return this.http.delete('/api/user/login' + Login.id);
}



}
