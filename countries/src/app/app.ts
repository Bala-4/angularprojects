import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Countryservice } from './service/countryservice';
import { HttpClientModule } from '@angular/common/http';
import { Countrycomponent } from './countrycomponent/countrycomponent';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule,Countrycomponent],
  providers: [Countryservice],
  templateUrl: './app.html',
  styleUrl: './countrycomponent/countrycomponent.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('countries');
}
