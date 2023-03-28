import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{
a:number;
b:number;
c:number;
flag:boolean;
student:string;
photo:string;
constructor(){
  this.a=10;
  this.b=20;
  this.flag=false;
  this.student="Neha";
  this.photo="../../assets/bb.jpeg";
}
ngOnInit(): void {
}
multiply():void{
  this.flag=true;
  this.c=this.a*this.b; //Here it only gets added
}
}
