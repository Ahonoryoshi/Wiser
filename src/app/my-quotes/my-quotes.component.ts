import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {


  quotes: Quote[] =[
    new Quote("Sometimes, it is the people who no one imagines anything of...who do the things that no one can imagine.", "The Imitation Game", " John Ahona "),
    new Quote("Manners Maketh Man","The king's Man","Ahona John"),
    new Quote("I am just a Mathemtician", "Alan Turing", "Ahona Yoshi")
  ]
  setAlert(index:number) {
    alert("5 seconds ago");
  }

  addNewQuote(quote:Quote){
    this.quotes.push(quote);
    quote.dob = new Date();
  }
  
  up(index:number){
    this.quotes[index].upvotes +=1
    
  }
  down(index:number){
    this.quotes[index].downvotes +=1
    
  }
  toggleDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }


  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].statement}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
