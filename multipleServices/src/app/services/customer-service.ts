import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _httpClient:HttpClient){}
  customerService():any{
    return this._httpClient.get('/assets/Customers.json');
  }
}
