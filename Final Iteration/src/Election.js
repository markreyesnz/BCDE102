class Election {
  constructor (newName, newYear) {
    this.name = newName
    this.year = newYear
    this.allMyParties = []
    this.allMyElectorates = []
    this.allMyCandidates = []
  }

  addParty (newPartyName) {
    const aParty = new Party(newPartyName)
    this.allMyParties.push(aParty)
    return aParty
  }

  findParty (targetName) {
    return this.allMyParties.find(aParty => aParty.name === targetName)
  }

  addElectorate (newElectorate, theParty) {
    const aElectorate = new Electorate(newElectorate, theParty)
    this.allMyElectorates.push(aElectorate)
    return aElectorate
  }

  electorateCount () {
		return this.allMyElectorates.length
  }

  addCandidate (newReferenceName, newPersonalNames, newPartyName) {
    const theParty = this.findParty(newPartyName)
    const aCandidate = new Candidate(newReferenceName, newPersonalNames, theParty)
    this.allMyCandidates.push(aCandidate)
    return aCandidate
  }

  setWinningParty (newElectorate, theParty) {
    const aElectorate = new Electorate(newElectorate, theParty)
    this.allMyElectorates.push(aElectorate)
    return aElectorate
  }

  getPartiesCount () {
		return this.allMyParties.length
  }

  sortPartiesByVotes () {
    this.allMyParties.sort(function (a, b) {
      return b.vote - a.vote
    })
  }

  getParties () {
    this.sortPartiesByVotes()
    let result = 'PARTIES' + View.NEWLINE()
    for (const aParty of this.allMyParties) {
      result += aParty + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }

  setCandidateVote (newName, winningParty, newVote) {
    const aCandidate = new Candidate(newName, winningParty, newVote)
    this.allMyParties.push(aCandidate)
  return aCandidate
  }

  setVotePercent (newPartyName, newSeat, newVote) {
    const aParty = new Party(newPartyName, newSeat, newVote)
    this.allMyParties.push(aParty)
    return aParty
  }
  

  getPartiesAsHtmlTable () {
    this.sortPartiesByVotes()
    let result = '<table border="1px" align="center" width="400px">'
    result += '<tr><th>PARTIES</th><th>Seats</th><th>Vote%</th></tr>'
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
    result += '<tr><th>ELECTORATES</th><th>Winning Party</th></tr>'
    
    for (const anElectorate of this.allMyElectorates) {
      result += anElectorate.asHtmlTable()
    }
    result += '</table>'
    return result
  }

  
  sortCandidatesByVotes () {
    this.allMyCandidates.sort(function (a, b) {
      return b.votes - a.votes
    })
  }

  getCandidates () {
    this.sortCandidatesByVotes()
    let result = 'CANDIDATES' + View.NEWLINE()
    for (const anCandidate of this.allMyCandidates) {
      result += anCandidate + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }
  getCandidatesAsHtmlTable () {
    this.sortCandidatesByVotes()
    let result = '<table border="1px"  align="center">'
    result += '<tr><th>Christchurch Central Candidates</th><th colspan="2">(Sorted by Vote)</th></tr>'
    
    for (const anCandidate of this.allMyCandidates) {
      result += anCandidate.asHtmlTable()
    }
    result += '</table>'
    return result
  }
  


  toString () {
    return `${this.name} ${this.year}`
  }

}
