import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { IfComponent } from './if.component/if.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [ProductComponent, IfComponent]
})
export class AppComponent {}
