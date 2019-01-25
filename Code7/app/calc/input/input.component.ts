import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output()
  first:EventEmitter<number>= new EventEmitter<number>();
  @Output()
  second:EventEmitter<number>= new EventEmitter<number>();
  constructor() {

   }
  takeFirstInput(event){
   this.first.emit(parseInt(event.target.value));
  }
  takeSecondInput(event){
    this.second.emit(parseInt(event.target.value));
  }
  ngOnInit() {
  }

}
