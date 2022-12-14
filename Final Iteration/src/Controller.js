class Controller { 
  static setup () {

    let electorate 
    electorate = new Election('New Zealand Election', 2020)
	
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
    
    electorate.setVotePercent('ACT New Zealand', 1, 8.0)
    electorate.setVotePercent('Advance NZ', 0, 0.9)
    electorate.setVotePercent('Aotearoa Legalise Cannabis Party', 0, 0.3)
    electorate.setVotePercent('Green Party', 1, 7.6)
    electorate.setVotePercent('HeartlandNZ', 0, 0.0)
    electorate.setVotePercent('Labour Party', 43, 49.1)
    electorate.setVotePercent('MÄori Party', 1, 1.0)
    electorate.setVotePercent('National Party', 26, 26.8)
    electorate.setVotePercent('New Conservative', 0, 1.5)
    electorate.setVotePercent('New Zealand First Party', 0, 2.7)
    electorate.setVotePercent('NZ Outdoors Party', 0, 0.1)
    electorate.setVotePercent('ONE Party', 0, 0.3)
    electorate.setVotePercent('Social Credit', 0, 0.1)
    electorate.setVotePercent('Sustainable New Zealand Party', 0, 0.1)
    electorate.setVotePercent('TEA Party', 0, 0.1)
    electorate.setVotePercent('The Opportunities Party (TOP)', 0, 1.4)
    electorate.setVotePercent('United Future', 0, 0.1)

    var aCandidate = electorate.addCandidate('GASKIN, Ian Camden', 'United Future')
    aCandidate.updateVotes(80)
    aCandidate = electorate.addCandidate('HILL, Douglas MacMillan', 'The Opportunities Party (TOP)')
    aCandidate.updateVotes(879)
    aCandidate = electorate.addCandidate('RICHARDSON, Peter Ian', 'Green Party')
    aCandidate.updateVotes(1957)
    aCandidate = electorate.addCandidate('ROBINSON, Philip John', 'New Zealand First Party')
    aCandidate.updateVotes(1091)
    aCandidate = electorate.addCandidate('HERBERT-SHUFFLEBOTHAM, Janine Anne', 'Aotearoa Legalise Cannabis Party')
    aCandidate.updateVotes(304)
    aCandidate = electorate.addCandidate('WAGNER, Nicola Joanne', 'National Party')
    aCandidate.updateVotes(13760)
    aCandidate = electorate.addCandidate('WEBB, Duncan Alexander', 'Labour Party')
    aCandidate.updateVotes(16631)

    return electorate

  }
}





