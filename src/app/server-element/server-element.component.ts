import { Component, Input, OnChanges, OnInit, SimpleChanges,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
@Input() serverElt:{type:string,name:string,content:string}
@Input()name:string;
rndNumber:Number = 0;
@ContentChild('contentParagraph')contentParagraph:ElementRef;
  constructor() { 
    console.log("constructor called");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("OnChanges called",changes);
  }
  ngOnInit(): void {
    console.log("Init called");
  }
  ngDoCheck(){
    console.log("do check");
  }
  ngAfterContentInit(){
    console.log("do content init");
    console.log(this.contentParagraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log("do content check");
  }
  ngAfterViewInit(){
    console.log("do view init");
  }
  ngAfterViewChecked(){
    console.log("after view checked");
  }
  getRandomValue(){
    this.rndNumber = Math.floor(Math.random() * Math.floor(2));
    console.log(this.rndNumber);
  }

  onChangeFirstValue(){
    this.rndNumber= 5;
    console.log('changed');
  }

  onChangeName(){
    this.name = 'saradha';
  }

}
