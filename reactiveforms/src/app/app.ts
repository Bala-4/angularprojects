import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {FormGroup,FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public personForm!: FormGroup;
  countries: String[] = [];
  ngOnInit(){
    this.countries=["USA","CANADA","INDIA"];
    this.personForm=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      lastName:new FormControl(''),
      email:new FormControl(''),
      gender:new FormControl(''),
      address:new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
        country:new FormControl(''),
      })
    });
  }
  public onSubmit(){
    console.log(this.personForm.value);
    alert("form submitted successfully");
    
  }
}
