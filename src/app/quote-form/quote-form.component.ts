import { Statement } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","");


  @Output() addQuote = new EventEmitter<Quote>();

  

  submitQuote(x:NgForm){
    const newquoote:Quote = Object.assign({},this.newQuote)
    if((newquoote.statement==null)&&(newquoote.author==null)&&(newquoote.submitter==null)){
      alert('Fill the form kindly')

    }
    else if (newquoote.statement==null) {
      alert('Please type in the quote statement')
      
    }
    else if(newquoote.author==null){
      alert('Please input the author of the quote')

    }
    else if (newquoote.submitter==null){
      alert('Please Fill out your name')

    }
    else {
      this.addQuote.emit(newquoote);
      x.reset();
      
    }
    
    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
