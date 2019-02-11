import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { MyLogic } from './MyLogic';
@Injectable()
export class UserGuard implements CanActivate{
  constructor(private router:Router,private logic:MyLogic){

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log("Guard Start...." ,route);
    var result:boolean = this.logic.isAuth(route.params.name);
    if(!result){
      this.router.navigate(['/']);
    }
    else{
      return true;
    }
    //return this.logic.isAuth(route.params.name);
    //this.router.navigate(['/']);
   // return false;
    //return true;
}
}
