import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Countryservice {
  constructor(private _httpClient:HttpClient){ }
  public getCountries():any{
    return this._httpClient.get("https://restcountries.com/v3.1/all?fields=name,flags");
  }
}
