export class Quote {


    showDetails: boolean;
    dob:Date;
    upvote:boolean;
    downvote:boolean;
    upvotes: number;
    downvotes: number;
    constructor(public statement: string,public author: string,public submitter: string){
      this.showDetails=false;
      this.upvotes=0;
      this.downvotes=0;
      this.upvote = false;
      this.downvote=false;
      let today = new Date()
      this.dob = new Date();
    }
}
