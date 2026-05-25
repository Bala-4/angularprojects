import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductData {
  constructor(private _httpClient:HttpClient){ }
  getProducts():any{
    return this._httpClient.get('http://localhost:9095/api/products/');
  }
  PostProducts(product:any):any{
    return this._httpClient.post('http://localhost:9095/api/products/',product);
  }
  PutProducts(product:any):any{
    return this._httpClient.put('http://localhost:9095/api/products/', product);
  }
  DeleteProducts(id:number):any{
    return this._httpClient.delete('http://localhost:9095/api/products/' + id);
  }
  getProductById(id:number):any{
    return this._httpClient.get('http://localhost:9095/api/products/'+id);
  }
}
