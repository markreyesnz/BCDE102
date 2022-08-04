class Candidate { 
    constructor (newReferenceName, theParty) {
      this.referenceName = newReferenceName
      this.myParty = theParty
      this.votes = 0
      this.percentVotes = 0
    }
  
    updateVotes (newVotes) {
      this.votes += newVotes
    }
  
    toString () {
      return `${this.referenceName} - ${this.myParty} - ${this.votes}`
    }

    asHtmlTable () {
      return `<tr><td>${this.referenceName}</td><td>${this.myParty}</td><td>${this.votes}</td></tr>`
    }
  
  
  }
  