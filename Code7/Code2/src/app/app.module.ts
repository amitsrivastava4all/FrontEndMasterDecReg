import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { MyService } from './services/MyService';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [

  BrowserModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
