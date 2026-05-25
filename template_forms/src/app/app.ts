import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  public firstName: string = '';
  public lastName: string = '';
  public gender: string = '';
  public email: string = '';
  public street: string = '';
  public city: string = '';
  public country: string = '';

  public onSubmit(data: any) {
    console.log(data); // logs all form values
  }
}
