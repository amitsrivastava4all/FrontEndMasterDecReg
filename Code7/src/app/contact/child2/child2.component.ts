import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
form:FormGroup;
  constructor() {

   }

   checkUsersAsynch(control:FormControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=='amit'){
          resolve(null);
        }
        else{
          resolve({'invaliduser':true});
        }
      },2000);
    })
    return promise;  // if validation is pass , return null
 }


   custom(formControl:FormControl){
    if(formControl.value=='amit'){
      return null;
    }
    else{
      return {'invaliduser':true};
    }
   }

   addEmail(){
    var emailField = new FormControl(null,[Validators.required]);
    (<FormArray>this.form.get('email')).push(emailField);
    this.form.get('email');

   }

  ngOnInit() {
    //,this.custom.bind(this)
     this.form = new FormGroup({
      "userid":new FormControl('ghj',[Validators.required,Validators.pattern('[a-z]{3,10}')],this.checkUsersAsynch.bind(this)),
      email:new FormArray([]),
      "personal":new FormGroup({
        "userid":new FormControl(null,[Validators.required])
      })
    });
  }

}
