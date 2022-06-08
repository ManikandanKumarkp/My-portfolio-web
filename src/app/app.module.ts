import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material';


import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCard ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
