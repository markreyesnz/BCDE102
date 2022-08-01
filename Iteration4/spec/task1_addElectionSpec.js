/* global describe beforeEach Controller it expect Election */
describe('Adding Election', () => {
  
  describe('Election Properties', () => {
    let electorate
    beforeEach(() => {
      electorate = new Election('New Zealand Election', 2020)
    })

    it('should have a .name property', () => {
       expect(electorate.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .year property', () => {
      expect(electorate.hasOwnProperty('year')).toBeTruthy()
    })
  })

  describe('values of Election from the setup method of Controller ', () => {
    let electorate
    beforeEach(() => {
      electorate = Controller.setup()
    })

    it('should have the correct name', () => {
      expect(electorate.name).toEqual('New Zealand Election')
    })

    it('should have the correct year', () => {
       expect(electorate.year).toEqual(2020)
    })
  })
  
    describe('types of values of Election from the setup method of Controller ', () => {
      var electorate
      beforeEach(() => {
        electorate = Controller.setup()
      })

      it('name should NOT have leading spaces', () => {
        expect(electorate.name[0]).not.toBe(' ')
      })
      
      it('name should NOT have trailing spaces', () => {
        expect(electorate.name[electorate.name.length-1]).not.toBe(' ')
      })


      it('year should be a number', () => {
         expect(typeof electorate.year).toBe('number')
      })
  })
})
