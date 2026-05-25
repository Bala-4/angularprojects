import { Component } from '@angular/core';
import { Countryservice } from '../service/countryservice'
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-countrycomponent',
  imports: [NgFor],
  templateUrl: './countrycomponent.html',
  styleUrl: './countrycomponent.css',
})
export class Countrycomponent {
  public data:any;
  constructor(private _service:Countryservice){}
  ngOnInit(){
    this._service.getCountries().subscribe(
      (response:any)=>{
      this.data=response;
    },
      (error:any)=>{
        console.error(error);
      });
  }
}
