import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './services/hello-service';
import { CustomerService } from './services/customer-service';
import { MultipleServices } from './components/multiple-services/multiple-services';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MultipleServices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('multipleServices');
}
