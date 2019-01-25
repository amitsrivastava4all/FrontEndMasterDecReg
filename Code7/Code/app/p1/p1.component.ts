import { Component, OnInit } from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'tcs-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  customer:Customer;
  message:string ;
  constructor() {
   this.message = 'Hello Child I am Parent';
   this.customer = new Customer(1001,"Ram");

  }
  callMe(data){
    this.message  = data;
  }
  takeInput(event){
  this.message = event.target.value;
  }

  ngOnInit() {
  }

}
