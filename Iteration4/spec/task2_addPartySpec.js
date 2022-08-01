
/* global describe beforeEach Controller it expect Election */
describe('Adding Party', () => {
  
  describe('Party Properties', () => {
    let theParty
    beforeEach(() => {
      theParty = new Party()
    })

    it('should have .partyName property', () => {
      expect(theParty.hasOwnProperty('partyName')).toBeTruthy()
   })
  })
  describe('', () => {
  let election
  beforeEach (() => {
	election = Controller.setup()
  })

})
  
})
