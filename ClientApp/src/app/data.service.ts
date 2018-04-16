import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private _http: Http) {}

  getUsers(){
    return this._http.get("api/perso")
      .map(res => res.json());
  }
}
