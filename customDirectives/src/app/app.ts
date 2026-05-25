import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyIf } from './directives/my-if';
import { MyLoop } from './directives/my-loop';
import { MyStyles } from './directives/my-styles';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyIf,MyLoop,MyStyles],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('customDirectives');
}
