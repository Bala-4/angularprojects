import { Component } from '@angular/core';
import {NgIf} from '@angular/common'; 
import {NgSwitch,NgSwitchCase,NgFor,NgSwitchDefault,NgStyle,NgClass} from '@angular/common';

@Component({
  selector: 'app-if',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor, NgSwitchDefault, NgStyle, NgClass],
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css'],
  standalone:true
})
export class IfComponent {
  x:number;
  y:number;
  myCase:number
  games:string[];
  fontSize:string;
  color:string;
  students:{name:string,rank:number}[];
  UseTdata:boolean;
  classObj:Object;
  constructor(){
    this.x=10;
    this.y=20;
    this.myCase=2;
    this.games=['cricket','football','hockey'];
    this.students=[
      {name:'sachin',rank:1},
      {name:'dhoni',rank:2},
      {name:'kohli',rank:3}]; 
    this.fontSize="40";
    this.color="red";
    this.UseTdata=true;
    this.classObj={
      tdata:this.UseTdata
    }
  }
  myfun(){
    return true;
  }
  getgames(){
    return this.games;
  }
  getStudents(){
    return this.students;
  }
}
