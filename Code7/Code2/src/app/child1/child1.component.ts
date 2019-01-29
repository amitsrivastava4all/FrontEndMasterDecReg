import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyService } from '../services/MyService';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public msg:string;
  constructor(private service:MyService) {
    this.msg = 'this is a default message of Child1';
  }

  ngOnInit() {
  }
  resetMessage(parentObject:AppComponent){
    this.msg = 'This is a Reset Message';
    console.log("Parent Object is ",parentObject);

    parentObject.callParent('This is my reset effect');
  }
  giveData(){
    this.msg = this.service.getMessage();
  }


}
