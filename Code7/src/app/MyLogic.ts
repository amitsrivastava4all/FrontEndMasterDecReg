import { Injectable } from "@angular/core";

@Injectable()
export class MyLogic{
  public isAuth(userid:string):boolean{
    if(userid=='Amit'){
      return true;
    }
    else{
      return false;
    }
  }
}
