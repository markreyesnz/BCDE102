
/* global describe beforeEach Controller it expect Election */
describe('task2 adding Party', () => {
  
  describe('Party Properties', () => {
    let theParty
    beforeEach(() => {
      theParty = new Party()
    })

    it('should have .partyName property', () => {
      expect(theParty.hasOwnProperty('partyName')).toBeTruthy()
   })
  })
  describe('Party Properties', () => {
  let election
  beforeEach (() => {
	election = Controller.setup()
  })
  //look for number of parties in array
  //it('should have added 18 Parties', () => {
    //expect(election.getPartiesCount()).toBe(18)
  //})
})
  
})
