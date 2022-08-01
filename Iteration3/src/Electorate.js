class Electorate { 
  constructor (newElectorate) {
    this.electorate = newElectorate
  }

  toString () {
    return `${this.electorate}`
  }
  asHtmlTable () {
    return `<tr><td>${this.electorate}</td></tr>`
  }

}
