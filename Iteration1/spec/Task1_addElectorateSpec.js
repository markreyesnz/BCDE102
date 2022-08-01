/* global describe beforeEach Controller it expect Electorate */
describe('task1 adding Elecrorate', () => {
  
    describe('Elecorate Properties', () => {
      let theElectorate
      beforeEach(() => {
        theElectorate = new Election('Christchurch Central', 2020)
      })
  
      it('should have a .name property', () => {
         expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
      })
  
      it('should have a .year property', () => {
        expect(theElectorate.hasOwnProperty('year')).toBeTruthy()
      })
    })
  
    describe('values of Electorate from the setup method of Controller ', () => {
      var theElectorate
      beforeEach(() => {
        theElectorate = Controller.setup()
      })
  
      it('should have the correct name', () => {
        expect(theElectorate.name).toBe('New Zealand Election')
      })
  
      it('hould have the correct name', () => {
         expect(theElectorate.year).toBe(2020)
      })
    })
    
      describe('types of values of Electorate from the setup method of Controller ', () => {
        var theElectorate
        beforeEach(() => {
          theElectorate = Controller.setup()
        })
  
        it('name should NOT have leading spaces', () => {
          expect(theElectorate.name[0]).not.toBe(' ')
        })
        
        it('name should NOT have trailing spaces', () => {
          expect(theElectorate.name[theElectorate.name.length-1]).not.toBe(' ')
        })
  
  
        it('year should be a number', () => {
           expect(typeof theElectorate.year).toBe('number')
        })
    })
  }) 
  