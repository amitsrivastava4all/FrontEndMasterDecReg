import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  links:Link[]=[];
  constructor(private acRoute:ActivatedRoute){
    console.log("Router Module Loaded...");
    this.links.push(new Link('Office','office'));
    this.links.push(new Link('Home','home'));
    //this.links = [{name:'Office',link:'office'},{name:'Home',link:'home'}]
    console.log("Links are ",this.links);
  }
  msg:string;
  ngOnInit(){
    this.acRoute.params.subscribe(paramObject=>{
      this.msg = "Name is "+paramObject['name'] +" City "+paramObject['city'];
    })
  }


}

class Link{
  constructor(public name:string, public link:string){

  }
}
