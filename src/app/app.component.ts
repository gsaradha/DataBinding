import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  serverElements = [];
@ViewChild('contentParagraph')contentParagraph:ElementRef;
  OnServerInput(serverDetails:Event){
        this.serverElements.push(serverDetails);
  }

  onChangeFirst(){
    this.serverElements[0].name = "changed";
  }
  
}
