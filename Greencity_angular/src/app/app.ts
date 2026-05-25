import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceDashboardComponent } from './components/resource-dashboard/resource-dashboard';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ResourceDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Greencity_angular');
}
