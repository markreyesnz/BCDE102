class Election {
	constructor (newName, newYear) {
		this.name = newName
		this.year = newYear
		this.allMyParties = []
	
  
	}
	addParty(newPartyName) {
		var someParty = new Party(newPartyName)
		this.allMyParties.push(someParty)
	}

	toString() {
		let result = `${this.name} ${this.year}`
		return result
	}
	toTable() {
		let result = `<table><tr><th>${this.allMyParties}</th>`
		return result
	}
	//count parties
	//getPartiesCount(){
		//return this.allMyParties.length
	//}
}
