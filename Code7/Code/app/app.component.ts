import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent{
  private msg:string;
  private flag:boolean;
  private myclass:string;
  private counter:number;
  private name:string;
  private total:number;
  private names:string[];
  private obj:Object;
  doAdd(first:string, second:string):void{
    this.total = parseInt(first) + parseInt(second);
  }
  takeName(event){
    this.name = event.target.value;
  }
  plus(){
  ++(this.counter);
  }
  displayShowHide(){
    this.flag = !this.flag;
  }
  constructor(){
    this.obj = {id:1001, name:'Ram',salary:9999, bonus:111};
    this.counter=0;
    this.flag = true;
  this.msg = 'Hello Angular';
  this.setColor();
  this.names= ["Ram","Shyam","tim","mike"];
  //this.myclass = 'green';
  }
  setColor():void{
    this.myclass = this.msg.length>10?'orange':'green';
  }
}
