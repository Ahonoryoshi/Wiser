import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();


  @Input() quote:Quote={
    statement:"",
    author:'',
    submitter:'',
    showDetails:true,
    upvote:false,
    downvote:false,
    dob: new Date(),
    upvotes:0,
    downvotes:0,
  };


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
