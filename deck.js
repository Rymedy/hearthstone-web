export default class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards
	}


	get numberOfCards() {
		return this.cards.length
	}

	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.cards[newIndex]
			this.cards[newIndex] = this.cards[i]
			this.cards[i] = oldValue
		}
	}
}
class MinionCard {
	constructor(attack, health) {
		this.attack = attack
		this.health = health
		this.mana = Math.round((this.attack + this.health) * 0.5)
	}

	getPlayerHTML() {
		const playerCardDiv = document.createElement('div')
		const playerAttackValue = document.createElement('div')
		const playerHealthValue = document.createElement('div')
		playerCardDiv.classList.add("cardinplay")
		playerCardDiv.classList.add("player-cardinplay")
		playerAttackValue.classList.add("attackValue")
		playerHealthValue.classList.add("healthValue")
		playerCardDiv.appendChild(playerAttackValue)
		playerCardDiv.appendChild(playerHealthValue)
		playerAttackValue.innerText = this.attack
		playerHealthValue.innerText = this.health
		//document.playerCardDiv.style.backgroundImage = "url('img_tree.png')";
		return playerCardDiv
	}
	getComputerHTML() {
		const computerCardDiv = document.createElement('div')
		const computerAttackValue = document.createElement('div')
		const computerHealthValue = document.createElement('div')
		computerCardDiv.classList.add("cardinplay")
		computerCardDiv.classList.add("computer-cardinplay")
		computerAttackValue.classList.add("attackValue")
		computerHealthValue.classList.add("healthValue")
		computerCardDiv.appendChild(computerAttackValue)
		computerCardDiv.appendChild(computerHealthValue)
		computerAttackValue.innerText = this.attack
		computerHealthValue.innerText = this.health
		return computerCardDiv
	}
	updatePlayerHTML() {
		
	}
	updateComputerHTML() {
		
	}
}

function freshDeck() {
	let kobalt_ghost = new MinionCard(1, 2)
	let meltracer = new MinionCard(3, 1)
	let spirit_walker = new MinionCard(3, 2)
	let tarantula = new MinionCard(4, 2)
	let king_monkey = new MinionCard(4, 5)
	let captain_merciful = new MinionCard(7, 6)
	let treasure_pirate = new MinionCard(4, 1)
	let boombreaker = new MinionCard(1, 4)
	let elegant_mage = new MinionCard(8, 6)
	let giant_gorilla = new MinionCard(10, 10)
	let treasure_hoarder = new MinionCard(2, 8)
	let boosting_totem = new MinionCard(2, 4)
	let oom_totem = new MinionCard(2, 6)
	let the_devil = new MinionCard(20, 20)
	let celient_goomba = new MinionCard(3, 5)
	let giant_dark_elf= new MinionCard(9, 4)
	let majestic_king = new MinionCard(1, 2)
	let savage_dinosaur = new MinionCard(3, 1)
	let wolf_hunter = new MinionCard(3, 2)
	let large_spider = new MinionCard(4, 2)
	let thunderwock = new MinionCard(4, 5)
	let banter_breaker = new MinionCard(7, 6)
	let flocker = new MinionCard(4, 1)
	let mudder_slime = new MinionCard(1, 4)
	let giantic_rat = new MinionCard(8, 6)
	let nelly_ritcher = new MinionCard(10, 10)
	let dillier = new MinionCard(2, 8)
	let frozen_flower = new MinionCard(2, 4)
	let dark_mage = new MinionCard(2, 6)
	let dark_warrior = new MinionCard(20, 20)
	let dark_shaman = new MinionCard(3, 5)
	let dark_rogue = new MinionCard(9, 4)

	return [
	kobalt_ghost, 
	meltracer, 
	spirit_walker, 
	tarantula, 
	king_monkey, 
	captain_merciful, 
	treasure_pirate, 
	boombreaker, 
	elegant_mage, 
	giant_gorilla, 
	treasure_hoarder,
	boosting_totem,
	oom_totem,
	celient_goomba,
	giant_dark_elf,
	the_devil,
	majestic_king,
	savage_dinosaur,
	wolf_hunter,
	large_spider,
	thunderwock,
	banter_breaker,
	flocker,
	mudder_slime,
	giantic_rat,
	nelly_ritcher,
	dillier,
	frozen_flower,
	dark_mage,
	dark_warrior,
	dark_shaman,
	dark_rogue
	]
}