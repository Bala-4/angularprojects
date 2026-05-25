import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpperService {
  constructor(private http: HttpClient) {}

  // Instead of uppercase, we’ll post to JSONPlaceholder
  convertToUpperCase(obj: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', obj);
  }
}
