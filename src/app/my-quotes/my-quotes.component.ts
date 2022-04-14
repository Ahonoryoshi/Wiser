import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {

  quotes: Quote[] =[
    new Quote("hello","hi","hey")
  ]

  addNewQuote(quote:Quote){
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
