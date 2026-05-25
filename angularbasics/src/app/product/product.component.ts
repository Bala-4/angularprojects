import { Component } from '@angular/core';
import { SellerComponent } from '../seller/seller.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [NgFor, SellerComponent]
})
export class ProductComponent {
  products: { id: string; name: string }[];

  constructor() {
    this.products = [
      { id: "4", name: "iPhone 14 Pro Max" },
      { id: "3", name: "Samsung Galaxy S23 Ultra" }
    ];
  }

  getProducts(): { id: string; name: string }[] {
    return this.products;
  }
}
