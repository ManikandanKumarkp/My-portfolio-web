import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule  } from '@angular/Material';


import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
