import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {

  apiUrl = 'http://localhost/SampleWS/';
	data: any;
  
  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/peoples')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/peoples', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
        reject(err);
        });
    });
  }

  editUser(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/peoples/1', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
