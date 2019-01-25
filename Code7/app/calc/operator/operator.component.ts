import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  @Output()
  opr:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getOperation(event){
    var operationName = event.target.value;
    this.opr.emit(operationName);

  }

}
