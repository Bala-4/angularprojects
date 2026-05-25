import { Component } from '@angular/core';
import { ProductData } from '../../services/product-data';
import { FormsModule } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-update-component',
  imports: [FormsModule,JsonPipe],
  templateUrl: './update-component.html',
  styleUrl: './update-component.css',
  standalone: true
})
export class UpdateComponent {

  public id: number=0;
  public name: string='';
  public price: number=0;
  public updateProductResponse:any;
  constructor(private _productData:ProductData){ }
  public updateProduct(product:any){
    this._productData.PutProducts(product).subscribe((data:any)=>{
      this.updateProductResponse=data;
    })
    }
}
