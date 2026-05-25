import { Component } from '@angular/core';
import { ProductData } from '../../services/product-data';
import { FormsModule } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { NgModel } from '@angular/forms'; 
@Component({
  selector: 'app-get-component',
  imports: [FormsModule,JsonPipe],
  templateUrl: './get-component.html',
  styleUrl: './get-component.css',
  standalone: true
})
export class GetComponent {

  public id: number=0;
  public getProductResponse:any;
  public getProductByIdResponse:any;
  constructor(private _productData:ProductData){ }
    public getProductById(id1:number){
      this._productData.getProductById(id1).subscribe((data:any)=>{
        this.getProductByIdResponse=data;
      })
    }
    public getProducts(){
      this._productData.getProducts().subscribe((data:any)=>{
        this.getProductResponse=data;
      })
    }
}
