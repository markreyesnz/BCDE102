class Controller { 
  static setup () {

    let electorate 
    electorate = new Election('New Zealand Election', 2020)

    let aParty = electorate.addParty('ACT New Zealand')
    electorate.addParty('Advance NZ')
    electorate.addParty('Aotearoa Legalise Cannabis Party')
    electorate.addParty('Green Party')
    electorate.addParty('HeartlandNZ')
    electorate.addParty('Labour Party')
    electorate.addParty('MÄori Party')
    electorate.addParty('National Party')
    electorate.addParty('New Conservative')
    electorate.addParty('New Zealand First Party')
    electorate.addParty('NZ Outdoors Party')
    electorate.addParty('ONE Party')
    electorate.addParty('Social Credit',)
    electorate.addParty('Sustainable New Zealand Party')
    electorate.addParty('TEA Party')
    electorate.addParty('The Opportunities Party (TOP)')
    electorate.addParty('United Future')



    // let myElectorate = electorate.addElectorate('Auckland Central')
    // myElectorate = electorate.addElectorate('Banks Peninsula')
    // myElectorate = electorate.addElectorate('Bay of Plenty')
	// myElectorate = electorate.addElectorate('Botany')
    // myElectorate = electorate.addElectorate('Christchurch Central')
    // myElectorate = electorate.addElectorate('Christchurch East')
    // myElectorate = electorate.addElectorate('Coromandel')
    // myElectorate = electorate.addElectorate('Dunedin')
    // myElectorate = electorate.addElectorate('East Coast')
    // myElectorate = electorate.addElectorate('East Coast Bays')
    // myElectorate = electorate.addElectorate('Epsom')
    // myElectorate = electorate.addElectorate('Hamilton East')
    // myElectorate = electorate.addElectorate('Hamilton West')
    // myElectorate = electorate.addElectorate('Hutt South')
    // myElectorate = electorate.addElectorate('Ilam')
    // myElectorate = electorate.addElectorate('Invercargill')
    // myElectorate = electorate.addElectorate('KaikÅura')
    // myElectorate = electorate.addElectorate('Kaipara ki Mahurangi')
    // myElectorate = electorate.addElectorate('Kelston')
    // myElectorate = electorate.addElectorate('Mana')
    // myElectorate = electorate.addElectorate('Manurewa')
    // myElectorate = electorate.addElectorate('Maungakiekie')
    // myElectorate = electorate.addElectorate('MÄngere')
    // myElectorate = electorate.addElectorate('Mt Albert')
    // myElectorate = electorate.addElectorate('Mt Roskill')
    // myElectorate = electorate.addElectorate('Napier')
    // myElectorate = electorate.addElectorate('Nelson')
    // myElectorate = electorate.addElectorate('New Lynn')
    // myElectorate = electorate.addElectorate('New Plymouth')
    // myElectorate = electorate.addElectorate('North Shore')
    // myElectorate = electorate.addElectorate('Northcote')
    // myElectorate = electorate.addElectorate('Northland')
    // myElectorate = electorate.addElectorate('ÅŒhÄriu')
    // myElectorate = electorate.addElectorate('ÅŒtaki')
    // myElectorate = electorate.addElectorate('Pakuranga')
    // myElectorate = electorate.addElectorate('Palmerston')
    // myElectorate = electorate.addElectorate('Panmure-ÅŒtÄhuhu')
    // myElectorate = electorate.addElectorate('Papakura')
    // myElectorate = electorate.addElectorate('Port Waikato')
    // myElectorate = electorate.addElectorate('Rangitata')
    // myElectorate = electorate.addElectorate('RangitÄ«kei')
    // myElectorate = electorate.addElectorate('Remutaka')
    // myElectorate = electorate.addElectorate('Rongotai')
    // myElectorate = electorate.addElectorate('Rotorua')
    // myElectorate = electorate.addElectorate('Selwyn')
    // myElectorate = electorate.addElectorate('Southland')
    // myElectorate = electorate.addElectorate('Taieri')
    // myElectorate = electorate.addElectorate('Takanini')
    // myElectorate = electorate.addElectorate('TÄmaki')
    // myElectorate = electorate.addElectorate('Taranaki-King Country')
    // myElectorate = electorate.addElectorate('TaupÅ')
    // myElectorate = electorate.addElectorate('Tauranga')
    // myElectorate = electorate.addElectorate('Te AtatÅ')
    // myElectorate = electorate.addElectorate('Tukituki')
    // myElectorate = electorate.addElectorate('Upper Harbour')
    // myElectorate = electorate.addElectorate('Waikato')
    // myElectorate = electorate.addElectorate('Waimakariri')
    // myElectorate = electorate.addElectorate('Wairarapa')
    // myElectorate = electorate.addElectorate('Waitaki')
    // myElectorate = electorate.addElectorate('Wellington Central')
    // myElectorate = electorate.addElectorate('West Coast-Tasman')
    // myElectorate = electorate.addElectorate('Whanganui')
    // myElectorate = electorate.addElectorate('WhangaparÄoa')
    // myElectorate = electorate.addElectorate('WhangÄrei')
    // myElectorate = electorate.addElectorate('Wigram')
    // myElectorate = electorate.addElectorate('Hauraki-Waikato')
    // myElectorate = electorate.addElectorate('Ikaroa-RÄwhiti')
    // myElectorate = electorate.addElectorate('TÄmaki Makaurau')
    // myElectorate = electorate.addElectorate('Te Tai HauÄuru')
    // myElectorate = electorate.addElectorate('Te Tai Tokerau')
    // myElectorate = electorate.addElectorate('Te Tai Tonga')
    // myElectorate = electorate.addElectorate('Waiariki')
	
	let aElectorate = electorate.setWinningParty('Auckland Central', 'Green Party')
    electorate.setWinningParty('Banks Peninsula', 'Labour Party')
    electorate.setWinningParty('Bay of Plenty', 'National Party')
    electorate.setWinningParty('Botany', 'National Party')
    electorate.setWinningParty('Christchurch Central', 'Labour Party')
    electorate.setWinningParty('Christchurch East', 'Labour Party')
    electorate.setWinningParty('Coromandel', 'National Party')
    electorate.setWinningParty('Dunedin', 'Labour Party')
    electorate.setWinningParty('East Coast', 'Labour Party')
    electorate.setWinningParty('East Coast Bays', 'National Party')
    electorate.setWinningParty('Epsom', 'ACT New Zealand')
    electorate.setWinningParty('Hamilton East', 'Labour Party')
    electorate.setWinningParty('Hamilton West', 'Labour Party')
    electorate.setWinningParty('Hutt South', 'Labour Party')
    electorate.setWinningParty('Ilam', 'Labour Party')
    electorate.setWinningParty('Invercargill', 'National Party')
    electorate.setWinningParty('KaikÅura', 'National Party')
    electorate.setWinningParty('Kaipara ki Mahurangi', 'National Party')
    electorate.setWinningParty('Kelston', 'Labour Party')
    electorate.setWinningParty('Mana', 'Labour Party')
    electorate.setWinningParty('MÄngere', 'Labour Party')
    electorate.setWinningParty('Manurewa', 'Labour Party')
    electorate.setWinningParty('Maungakiekie', 'National Party')
    electorate.setWinningParty('Mt Albert', 'Labour Party')
    electorate.setWinningParty('Mt Roskill', 'Labour Party')
    electorate.setWinningParty('Napier', 'Labour Party')
    electorate.setWinningParty('Nelson', 'Labour Party')
    electorate.setWinningParty('New Lynn', 'Labour Party')
    electorate.setWinningParty('New Plymouth', 'Labour Party')
    electorate.setWinningParty('North Shore', 'National Party')
    electorate.setWinningParty('Northcote', 'Labour Party')
    electorate.setWinningParty('Northland', 'National Party')
    electorate.setWinningParty('ÅŒhÄriu', 'Labour Party')
    electorate.setWinningParty('ÅŒtaki', 'Labour Party')
    electorate.setWinningParty('Pakuranga', 'National Party')
    electorate.setWinningParty('Palmerston', 'Labour Party')
    electorate.setWinningParty('Panmure-ÅŒtÄhuhu', 'Labour Party')
    electorate.setWinningParty('Papakura', 'National Party')
    electorate.setWinningParty('Port Waikato', 'National Party')
    electorate.setWinningParty('Rangitata', 'Labour Party')
    electorate.setWinningParty('RangitÄ«kei', 'National Party')
    electorate.setWinningParty('Remutaka', 'Labour Party')
    electorate.setWinningParty('Rongotai', 'Labour Party')
    electorate.setWinningParty('Rotorua', 'National Party')
    electorate.setWinningParty('Selwyn', 'National Party')
    electorate.setWinningParty('Southland', 'National Party')
    electorate.setWinningParty('Taieri', 'Labour Party')
    electorate.setWinningParty('Takanini', 'Labour Party')
    electorate.setWinningParty('TÄmaki', 'National Party')
    electorate.setWinningParty('Taranaki-King Country', 'National Party')
    electorate.setWinningParty('TaupÅ', 'National Party')
    electorate.setWinningParty('Tauranga', 'National Party')
    electorate.setWinningParty('Te AtatÅ«', 'Labour Party')
    electorate.setWinningParty('Tukituki', 'Labour Party')
    electorate.setWinningParty('Upper Harbour', 'Labour Party')
    electorate.setWinningParty('Waikato', 'National Party')
    electorate.setWinningParty('Waimakariri', 'National Party')
    electorate.setWinningParty('Wairarapa', 'Labour Party')
    electorate.setWinningParty('Waitaki', 'National Party')
    electorate.setWinningParty('Wellington Central', 'Labour Party')
    electorate.setWinningParty('West Coast-Tasman', 'Labour Party')
    electorate.setWinningParty('Whanganui', 'Labour Party')
    electorate.setWinningParty('WhangaparÄoa', 'National Party')
    electorate.setWinningParty('WhangÄrei', 'National Party')
    electorate.setWinningParty('Wigram', 'Labour Party')
    electorate.setWinningParty('Hauraki-Waikato', 'Labour Party')
    electorate.setWinningParty('Ikaroa-RÄwhiti', 'Labour Party')
    electorate.setWinningParty('TÄmaki Makaurau', 'Labour Party')
    electorate.setWinningParty('Te Tai HauÄuru', 'Labour Party')
    electorate.setWinningParty('Te Tai Tokerau', 'Labour Party')
    electorate.setWinningParty('Te Tai Tonga', 'Labour Party')
    electorate.setWinningParty('Waiariki', 'MÄori Party')

    return electorate
  }
}





/*


    electorate.setVotePercent('ACT New Zealand', 8.0)
    electorate.setVotePercent('Advance NZ', 0.9)
    electorate.setVotePercent('Aotearoa Legalise Cannabis Party', 0.3)
    electorate.setVotePercent('Green Party', 7.6)
    electorate.setVotePercent('HeartlandNZ', 0.0)
    electorate.setVotePercent('Labour Party', 49.1)
    electorate.setVotePercent('MÄori Party', 1.0)
    electorate.setVotePercent('National Party', 26.8)
    electorate.setVotePercent('New Conservative', 1.5)
    electorate.setVotePercent('New Zealand First Party', 2.7)
    electorate.setVotePercent('NZ Outdoors Party', 0.1)
    electorate.setVotePercent('ONE Party', 0.3)
    electorate.setVotePercent('Social Credit', 0.1)
    electorate.setVotePercent('Sustainable New Zealand Party', 0.1)
    electorate.setVotePercent('TEA Party', 0.1)
    electorate.setVotePercent('The Opportunities Party (TOP)', 1.4)
    electorate.setVotePercent('United Future', 0.1)
	
	let theElectorate = electorate.findElectorate('Christchurch Central')
	
	theElectorate.setWinningParty('GASKIN, Ian Camden', 'United Future')
 	theElectorate.setWinningParty('HILL, Douglas MacMillan', 'The Opportunities Party (TOP)')
 	theElectorate.setWinningParty('RICHARDSON, Peter Ian', 'Green Party')
 	theElectorate.setWinningParty('ROBINSON, Philip John', 'New Zealand First Party')
 	theElectorate.setWinningParty('HERBERT-SHUFFLEBOTHAM, Janine Anne', 'Aotearoa Legalise Cannabis Party')
 	theElectorate.setWinningParty('WAGNER, Nicola Joanne', 'National Party')
 	theElectorate.setWinningParty('WEBB, Duncan Alexander', 'Labour Party')
    

    theElectorate.setCandidateVote('GASKIN, Ian Camden', 80)
    theElectorate.setCandidateVote('HILL, Douglas MacMillan', 879)
    theElectorate.setCandidateVote('RICHARDSON, Peter Ian', 1957)
    theElectorate.setCandidateVote('ROBINSON, Philip John', 1091)
    theElectorate.setCandidateVote('HERBERT-SHUFFLEBOTHAM, Janine Anne', 304)
    theElectorate.setCandidateVote('WAGNER, Nicola Joanne', 13760)
    theElectorate.setCandidateVote('WEBB, Duncan Alexander', 16631)	

    return electorate
  }
} */