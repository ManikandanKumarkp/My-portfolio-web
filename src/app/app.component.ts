import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Name :string ="Manikandan ";
    
  Function onclick(){
    return Name;
  }
  onclick ();
}
