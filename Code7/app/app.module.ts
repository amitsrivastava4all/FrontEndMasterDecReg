import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { InputComponent } from './calc/input/input.component';
import { OutputComponent } from './calc/output/output.component';
import { OperatorComponent } from './calc/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    InputComponent,
    OutputComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
