import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  save(form:ElementRef){
    console.log('Form is ',form);
    //console.log(form.controls.email.value);
    if(form){
          if(form.invalid){
            console.log("Form is Invalid");
          }
          else{
            console.log('...Form is Valid Submit the form to server');
          for(let key in form.controls){
            console.log("I is ",key);
            console.log("Controls ",form.controls[key].value);
          }
          }
    }
  }

}
