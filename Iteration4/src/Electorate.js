class Electorate { 
  constructor (newElectorate, theParty) {
    this.electorate = newElectorate
	this.myParty = theParty
  }

  toString () {
    return `${this.electorate}`
  }
  asHtmlTable () {
    return `<tr><td>${this.electorate}</td><td>${this.myParty}</td></tr>`
  }

}
