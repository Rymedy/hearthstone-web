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
	}

	getHTML() {
		const cardDiv = document.createElement('div')
		const cardFaceDiv = document.createElement('div')
		const cardLabelDiv = document.createElement('div')
		const attackLabelDiv = document.createElement('div')
		const healthLabelDiv = document.createElement('div')
		document.getElementById('cards').appendChild(cardDiv);
		cardDiv.classList.add("card")
		cardFaceDiv.classList.add("card-face")
		cardLabelDiv.classList.add("card-label")
		cardDiv.appendChild(cardFaceDiv)
		cardFaceDiv.appendChild(cardLabelDiv)
		cardFaceDiv.appendChild(attackLabelDiv)
		cardFaceDiv.appendChild(healthLabelDiv)
		cardLabelDiv.innerHTML = "1";
		attackLabelDiv.innerText = this.attack
		healthLabelDiv.innerText = this.health
		return cardDiv
	}
}

function freshDeck() {
	let kobalt_ghost = new MinionCard(1, 2)
	let meltracer = new MinionCard(3, 1)
	let spirit_walker = new MinionCard(3, 2)
	let tarantula = new MinionCard(4, 2)
	let king_monkey = new MinionCard(4, 5)
	let captain_merciful = new MinionCard(7, 6)

	return [kobalt_ghost, meltracer, spirit_walker, tarantula, king_monkey, captain_merciful]
}