import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
  
})
export class HelloService {
  constructor(private _httpClient:HttpClient){}
  helloService():any{
    return this._httpClient.get('/assets/Message.json');
  }
}
