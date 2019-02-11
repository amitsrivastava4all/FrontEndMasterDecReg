import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Route, ActivatedRoute } from "@angular/router";
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { Child1Component } from './contact/child1/child1.component';
import { Child2Component } from './contact/child2/child2.component';
import { UserGuard } from './UserGuard';
import { MyLogic } from './MyLogic';
const route:Route[] = [
  {path:'',component:HomeComponent},
  {path:'contact/:name/:city',canActivate:[UserGuard],component:ContactComponent, children:[{path:'office',component:Child1Component},{path:'home',component:Child2Component}]}
]
@NgModule({
  declarations:[ HomeComponent,
    ContactComponent,
    Child1Component,
    Child2Component],
    providers:[UserGuard,MyLogic],
  imports:[CommonModule, RouterModule.forRoot(route),FormsModule],





exports:[RouterModule]
})
export class MyRouterModule {

}
