import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UpperService } from './upperService/upper-service';
import {FormsModule} from '@angular/forms';
import { Uppercomponent } from './uppercomponent/uppercomponent';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet ,FormsModule,Uppercomponent,HttpClientModule],
//   providers:[UpperService],
//   templateUrl: './app.html',
//   styleUrl: './uppercomponent/uppercomponent.css'
// })
// export class App {
//   protected readonly title = signal('postService');
// }
@Component({
  selector: 'app-root',
  imports: [FormsModule, Uppercomponent, HttpClientModule],
  providers: [UpperService],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
