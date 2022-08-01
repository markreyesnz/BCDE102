class Election {
  constructor (newName, newYear) {
    this.name = newName
    this.year = newYear
    this.allMyParties = []
    this.allMyElectorates = []
  }

  addParty (newPartyName) {
    const aParty = new Party(newPartyName)
    this.allMyParties.push(aParty)
    return aParty
  }

  findParty (targetName) {
    return this.allMyParties.find(aParty => aParty.name === targetName)
  }

  addElectorate (newElectorate) {
    const aElectorate = new Electorate(newElectorate)
    this.allMyElectorates.push(aElectorate)
    return aElectorate
  }


  getParties () {
    let result = 'PARTIES' + View.NEWLINE()
    for (const aParty of this.allMyParties) {
      result += aParty + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }

  getPartiesAsHtmlTable () {

    let result = '<table border="1px" align="center" width="400px">'
    result += '<tr><th>PARTIES</th></tr>'
    for (let aParty of this.allMyParties) {
      result += aParty.asHtmlTable()
    }
    result += '</table>'
    return result
  }
  

  getElectorates () {
    let result = 'ELECTORATES' + View.NEWLINE()
    for (const anElectorate of this.allMyElectorates) {
      result += anElectorate + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }
    getElectoratesAsHtmlTable () {

    let result = '<table border="1px"  align="center" width="400px">'
    result += '<tr><th>ELECTORATES</th></tr>'
    
    for (const anElectorate of this.allMyElectorates) {
      result += anElectorate.asHtmlTable()
    }
    result += '</table>'
    return result
  }

  toString () {
    return `${this.name} ${this.year}`
  }

}
