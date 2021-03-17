import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @ViewChild('servercontent') servercontent:ElementRef;
  @Output()server = new EventEmitter<{type:string, name:string,content:string}>();
  serverlt :{type:string, name:string,content:string} = {type:'',name:'',content:''}
  serverBlPrnt :{type:string, name:string,content:string} = {type:'',name:'',content:''}

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    console.log("view child" ,   this.servercontent);
    this.serverlt = {type: 'server',name:this.newServerName,content:this.servercontent.nativeElement.value};
    this.server.emit(this.serverlt);
  }

  onAddBlueprint() {
    this.serverBlPrnt = {type:'blueprint',name:this.newServerName,content:this.servercontent.nativeElement.value};
    this.server.emit(this.serverBlPrnt);
  }
}
