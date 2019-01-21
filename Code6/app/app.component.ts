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
    this.counter=0;
    this.flag = true;
  this.msg = 'Hello Angular';
  this.setColor();
  //this.myclass = 'green';
  }
  setColor():void{
    this.myclass = this.msg.length>10?'orange':'green';
  }
}
