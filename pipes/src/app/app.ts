import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';
import { ReversepipePipe } from './pipes/reversepipe-pipe';
import { AsyncPipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TitleCasePipe,UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,JsonPipe,PercentPipe,AsyncPipe,NgFor,DecimalPipe,SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  promise:Promise<any>;
  title='bharath'
  mydate:Date=new Date();
  mymoney:number=1200;
  myobj={name:"John",salary:9000};
  mynumber:number=1000.12345;
  stock:number=3.5;
  numbers:number[]=[10,20,30,40,50];

  constructor(){
    this.promise=this.getPromise();
  }

  getPromise(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve("Promise Response"),2000);
    });
  }
}
