/*specRunner00*/
describe('00Spec (specRunner00)', function () {
	
	describe('Election', function () {
    var theElection
    beforeEach(function () {
      theElection = new Election ()
})

    describe('the allMyElectorates property', function () {
      it('should have an .allMyElectorates property', function () {
        expect(theElection.hasOwnProperty('allMyElectorates')).toBeTruthy()	
      })
	  
	  it('should reference an array (allMyElectorates)', function () {
        expect(Array.isArray(theElection.allMyElectorates)).toBeTruthy()
      })
	  
	 
	  it('should have an .allMyParties property', function () {
        expect(theElection.hasOwnProperty('allMyParties')).toBeTruthy()	
      })
	  
	  it('should reference an array (allMyParties)', function () {
        expect(Array.isArray(theElection.allMyParties)).toBeTruthy()
      })
	  
	  it('should have an .year property', function () {
          expect(theElection.hasOwnProperty('year')).toBeTruthy()
      })
	  
	  it('should have an .getPartiesCount property', function () {
          expect(typeof theElection.getPartiesCount).toBeTruthy()
      })
	  
	  it('should have an .electorateCount property', function () {
          expect(typeof theElection.electorateCount).toBeTruthy()
      })
	  
	  it('should have an .addParty function', function () {
      expect(typeof theElection.addParty).toBe('function')
    })


	it('should have an .addElectorate function', function () {
      expect(typeof theElection.addElectorate).toBe('function')
    })
	
	it('should have an .setWinningParty function', function () {
      expect(typeof theElection.setWinningParty).toBe('function')
    })
	  
	  it('should have the correct name for the first party', () => {
       expect(theElection.allMyParties[0]).toBe()
    })
    it('should have the correct Number of parties', () => {
      
       expect(theElection.allMyParties.length).toBe(0)
    })
	
  }) 

  })

  describe('Electorate', function () {
    var theElectorate
    beforeEach(function () {
      theElectorate = new Election()
    })

    describe('the allMyCandidates property', function () {
      it('should have an .allMyCandidates property', function () {
        expect(theElectorate.hasOwnProperty('allMyCandidates')).toBeTruthy()	
      })
	  
	  it('should have an .allMyParties property', function () {
        expect(theElectorate.hasOwnProperty('allMyParties')).toBeTruthy()	
      })
	  
	  it('should reference an array (allMyCandidates)', function () {
        expect(Array.isArray(theElectorate.allMyCandidates)).toBeTruthy()
      })
	  
	 
	  it('should have an .name property', function () {
        expect(theElectorate.hasOwnProperty('name')).toBeTruthy()	
      })
	  
	  it('should reference an array (allMyParties)', function () {
        expect(Array.isArray(theElectorate.allMyParties)).toBeTruthy()
      })
	  
	
  })
  
  })

	describe('Candidate', function () {
      var theCandidate
      beforeEach(function () {
        theCandidate = new Candidate()
      })

      it('should have an .referenceName property', function () {
          expect(theCandidate.hasOwnProperty('referenceName')).toBeTruthy()
      })

      it('should have a .myParty property', function () {
        expect(theCandidate.hasOwnProperty('myParty')).toBeTruthy()
      })

      it('should have a .votes property', function () {
        expect(theCandidate.hasOwnProperty('votes')).toBeTruthy()
      })

      it('should have a .percentVotes property', function () {
        expect(theCandidate.hasOwnProperty('percentVotes')).toBeTruthy()
      })
	 
      it('should return a string', function () {
        expect(typeof theCandidate.toString()).toBeTruthy()
      })
    })	 


	describe('Party', function () {
      var theParty
      beforeEach(function () {
        theParty = new Party()
      })

      it('should have an .partyName property', function () {
          expect(theParty.hasOwnProperty('partyName')).toBeTruthy()
      })

      it('should have a .vote property', function () {
        expect(theParty.hasOwnProperty('vote')).toBeTruthy()
      })

      
	    it('should return a string', function () {
        expect(typeof theParty.toString()).toBe('string')
      })
    
    })

})









