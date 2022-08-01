class Party { 
  constructor (newPartyName) {
    this.partyName = newPartyName
  }

  toString () {
    return `${this.partyName}`
  }
  
  asHtmlTable () {
    return `<tr><td>${this.partyName}</td></tr>`
  }
  
}
