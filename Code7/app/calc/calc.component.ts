import { Component, OnInit } from '@angular/core';

import { calcOperations } from '../models/calcoperations';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  private firstNumber:number;
  private secondNumber:number;
  private result:number;
  constructor() { }

  ngOnInit() {
  }
  getOperationName(oprName){
    console.log("OPr Name is ",oprName);

    this.result = calcOperations[oprName](this.firstNumber , this.secondNumber);
    console.log("Calling ",oprName, "Result is ",this.result);
  }

  getFirstInput(data){
  this.firstNumber = data;
  console.log("First ",this.firstNumber);
  }
  getSecondInput(data){
  this.secondNumber = data;
  console.log("Second ",this.secondNumber);
  }

}
