import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {Child1Component} from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Subchild2Component } from './child2/subchild2/subchild2.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
@NgModule({
  declarations:[AppComponent,Child1Component, Child2Component, Subchild2Component, P1Component, P2Component],
  imports:[BrowserModule],
  bootstrap:[AppComponent]

})

export class AppModule{

}
