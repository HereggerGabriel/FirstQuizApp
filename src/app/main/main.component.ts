import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() questions;
  @Input() choices;
  @Input() answers;
  @Input() questionIndex;
  @Input() totalQuestions;
  @Input() finished;
  @Output() clickAnswer: EventEmitter<object>  = new EventEmitter();
  @Input() selectedIndex;

  webCamError;

  constructor() { 
   
    this.selectedIndex = 0;
  }

  ngOnInit() {
    

    
  }

  ngAfterViewInit(){
  }

  clickChoice(e){
    // alert(e.target.id);
    
   // this.selectedIndex = parseInt(e.target.id.replace("choice",""));
   // alert(this.selectedIndex);
     this.clickAnswer.emit(e);
    
  }
   
  

}
