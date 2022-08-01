class Election {
    constructor (newName, newYear) {
        this.name = newName
        this.year = newYear
    }

    toString () {
		let result = ''
		result +=  this.name + " " + this.year
		return result

    }

}
// var electionName = new Election('New Zealand Election', 2022);

// document.write(electionName);

// console.log(electionName);