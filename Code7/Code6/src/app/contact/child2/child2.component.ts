import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
form:FormGroup;
  constructor() {
   
   }

  ngOnInit() {
     this.form = new FormGroup({
      "userid":new FormControl(null,[Validators.required,Validators.pattern('[a-z]{3,10}')]);
    });
  }

}
