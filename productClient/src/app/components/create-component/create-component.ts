import { Component } from '@angular/core';
import { ProductData } from '../../services/product-data';
import { FormsModule } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-create-component',
  imports: [FormsModule,JsonPipe],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
  standalone: true
})
export class CreateComponent {

  public id: number = 0;
  public name: string = '';
  public price: number = 0;
  public description: string = '';
  public createProductResponse: any = null;
  constructor(private _productData:ProductData){ }
   public createProduct(product:any){
    this._productData.PostProducts(product).subscribe((data:any)=>{
      this.createProductResponse=data;
    })
  }
}
