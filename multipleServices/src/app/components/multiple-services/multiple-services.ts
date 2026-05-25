import { Component } from '@angular/core';
import { HelloService } from '../../services/hello-service';
import { CustomerService } from '../../services/customer-service';
import { JsonPipe } from '@angular/common';
import {NgFor} from '@angular/common';
import { forkJoin } from 'rxjs';  
@Component({
  selector: 'app-multiple-services',
  imports: [JsonPipe,NgFor],
  templateUrl: './multiple-services.html',
  styleUrl: './multiple-services.css',
  standalone: true
})
export class MultipleServices {
  public helloResponse:any;
  public customerResponse:any;
  constructor(private _helloService:HelloService,private _customerService:CustomerService){
    this._helloService.helloService().subscribe((res:any)=>this.helloResponse=res);
    this._customerService.customerService().subscribe((res:any)=>this.customerResponse=res);
  }
  
  
}
