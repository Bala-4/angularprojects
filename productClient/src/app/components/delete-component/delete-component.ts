import { Component } from '@angular/core';
import { ProductData } from '../../services/product-data';
import { FormsModule } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-delete-component',
  imports: [FormsModule,JsonPipe],
  templateUrl: './delete-component.html',
  styleUrl: './delete-component.css',
  standalone: true
})
export class DeleteComponent {

  public id: number=0;
  public deleteProductResponse:any;
  constructor(private _productData:ProductData){ }
   public deleteProduct(id:any){
    this._productData.DeleteProducts(id).subscribe((data:any)=>{
      this.deleteProductResponse=data;
    })
  }
}
