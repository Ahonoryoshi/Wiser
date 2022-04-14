import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {

  quotes: Quote[] =[
    new Quote("Manners Maketh Man","The king's Man","Ahona John"),
    new Quote("I am just a Mathemtician", "Alan Turing", "Ahona Yoshi")
  ]

  addNewQuote(quote:Quote){
    this.quotes.push(quote)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
