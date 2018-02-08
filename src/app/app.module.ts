import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrueFalseValueDirective } from './true-false-value.directive';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TrueFalseValueDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
