class Party { 
  constructor (newPartyName, partySeats, newVote) {
    this.partyName = newPartyName
    this.seats = partySeats
    this.vote = newVote
  }

  toString () {
    return `${this.partyName}`
  }
  
  asHtmlTable () {
    return `<tr><td>${this.partyName}</td><td>${this.seats}</td><td>${this.vote}%</td></tr>`
  }

  
}


