import { Component, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { MyService } from './services/MyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyService]
})
export class AppComponent {
  title = 'commdemo';
  @ViewChildren(Child1Component)
  childs:QueryList<Child1Component>;
  //private service:MyService;
  constructor( private service:MyService){
  //this.service = service;
  }
  //@ViewChild(Child1Component)
  //child:Child1Component;
  // takeInput(event){
  //   this.child.msg=event.target.value;
  // }
  // doreset(){
  //   this.child.resetMessage(this);
  // }
  sendData(data){
    this.service.sendMessage(data);
  }
  getAllChilds(event){
    this.childs.forEach(current=>{
      current.msg = event.target.value;
    })
  }

  callParent(msg2:string){
    this.title = msg2;
  }
}
