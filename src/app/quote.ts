export class Quote {
    showDetails: boolean;
    constructor(public statement: string,public author: string,public submitter: string){
      this.showDetails=false;
    }
}
