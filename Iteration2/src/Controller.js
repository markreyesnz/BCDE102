class Controller  {
	static setup  () {
		let election
		election = new Election('New Zealand Election', 2020)
		
		//
		election.addParty('ACT New Zealand') 
		election.addParty('Aotearoa Legalise Cannabis Party') 
		election.addParty('Heartland New Zealand Party') 
		election.addParty('MANA Movement') 
		election.addParty('Māori Party') 
		election.addParty('New Conservative') 
		election.addParty('New Zealand First Party') 
		election.addParty('New Zealand Labour Party') 
		election.addParty('New Zealand TEA Party') 
		election.addParty('NZ Outdoors Party') 
		election.addParty('ONE Party') 
		election.addParty('Sustainable New Zealand Party') 
		election.addParty('The Advance New Zealand Party') 
		election.addParty('The Green Party of Aotearoa/New Zealand') 
		election.addParty('The New Zealand Democratic Party for Social Credit') 
		election.addParty('The New Zealand National Party') 
		election.addParty('The Opportunities Party (TOP)') 
		election.addParty('Vision New Zealand')
		//
		return election
	}
	
}
