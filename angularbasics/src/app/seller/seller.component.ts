import { Component } from '@angular/core';
import { NgFor } from '@angular/common';   // 👈 import NgFor

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
  standalone: true,
  imports: [NgFor]   // 👈 add NgFor here
})
export class SellerComponent {
  sellers: string[];
  hide: boolean;

  constructor() {
    this.sellers = ["BestBuy", "Apple", "Amazon"];
    this.hide = true;
  }

  getSellers(): string[] {
    return this.sellers;
  }
  toggle(){
    this.hide=!this.hide;
  }
}
