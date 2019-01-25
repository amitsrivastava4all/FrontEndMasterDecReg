import {Component} from '@angular/core';
@Component({
  selector:'app-child1',
  templateUrl:'child1.component.html',
  styleUrls:['child1.component.css']
})
export class Child1Component{
  title:string;
  constructor(){
    this.title = 'I am Child Component';
  }
}
