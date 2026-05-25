import { Component } from '@angular/core';
import { UpperService } from '../upperService/upper-service';
import { HttpErrorResponse } from '@angular/common/http';
import {NgModel} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-uppercomponent',
  imports: [FormsModule, CommonModule],
  templateUrl: './uppercomponent.html',
  styleUrl: './uppercomponent.css',
  standalone: true
})
export class Uppercomponent {
  public result:any;
  public my_message:any;
  constructor(private _service:UpperService){}
  ngOnInit(){

  }
  public convert(obj: any): void {
  this._service.convertToUpperCase({ 
    title: this.my_message.toUpperCase(), 
    
  }).subscribe(
    (res: any) => this.result = JSON.stringify(res), // show full response
    (err: HttpErrorResponse) => console.warn(err)
  );
}

  }
