import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import {Customer} from '../p1/Customer';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'tcs-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit, OnDestroy  {
  @Input()
  data:string;
  @Input()
  cust:Customer;
  @Output()
  dataout:EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  ngOnInit(){

  }
  ngOnDestroy(){

  }
  callParent(event,msg){
    this.dataout.emit(msg);
  }



}
