import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductData } from './services/product-data';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { AppRouterModule } from './routing.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule,FormsModule,JsonPipe,RouterLink],
  templateUrl: './app.html',
  providers:[ProductData],
  styleUrl: './app.css',
  standalone:true
})
export class App {

  // id!: number;
  // id1!: number;
  // id2!: number;
  // id3!: number;
  // name!: string;
  // name1!: string;
  // description!: string;
  // price!: number;
  // price1!: number;

  // public products:any;
  // public getProductResponse:any;
  // public createProductResponse:any;
  // public updateProductResponse:any;
  // public deleteProductResponse:any;
  // public getProductByIdResponse:any;
  // // public id:any;
  // // public product:any;
  // constructor(private _productData:ProductData){
  //   this._productData.getProducts().subscribe((data:any)=>{
  //     this.getProductResponse=data;
  //   })
  // }
  //   public getProducts(){
  //     this._productData.getProducts().subscribe((data:any)=>{
  //       this.getProductResponse=data;
  //     })
  //   }

  //   public createProduct(product:any){
  //   this._productData.PostProducts(product).subscribe((data:any)=>{
  //     this.createProductResponse=data;
  //   })
  // }
  //   public updateProduct(product:any){
  //   this._productData.PutProducts(product).subscribe((data:any)=>{
  //     this.updateProductResponse=data;
  //   })
  //   }
  //   public deleteProduct(id:any){
  //   this._productData.DeleteProducts(id).subscribe((data:any)=>{
  //     this.deleteProductResponse=data;
  //   })
  // }
  //   public getProductById(id1:number){
  //     this._productData.getProductById(id1).subscribe((data:any)=>{
  //       this.getProductByIdResponse=data;
  //     })
  //   }
}
