var id1 = 0;
var id2 = 0;
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
	constructor(attack, health, info, imageString, name) {
		this.imageString = imageString;
		this.attack = attack;
		this.health = health;
		this.info = info;
		this.mana = Math.round((this.attack + this.health) * 0.5)
		this.name = name;
	}
	getComputerHTML() {
		const computerCardDiv = document.createElement('div')
		const computerAttackValue = document.createElement('div')
		const computerHealthValue = document.createElement('div')
		const oval = document.createElement('div')
		computerCardDiv.id = "cpuCardInPlay" + id2
		computerCardDiv.classList.add("cardinplay")
		computerCardDiv.classList.add("computer-cardinplay")
		computerAttackValue.classList.add("attackValue")
		computerHealthValue.classList.add("healthValue")
		oval.classList.add('oval')
		computerCardDiv.appendChild(computerAttackValue)
		computerCardDiv.appendChild(computerHealthValue)
		computerCardDiv.appendChild(oval)
		computerAttackValue.innerText = this.attack
		computerHealthValue.innerText = this.health
		computerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		id2 += 1
		return computerCardDiv
	}
	getPlayerHTML() {
		const playerCardDiv = document.createElement('div')
		const playerAttackValue = document.createElement('div')
		const playerHealthValue = document.createElement('div')
		const oval = document.createElement('div')
		playerCardDiv.id = "playerCardInPlay" + id1
		playerCardDiv.classList.add("cardinplay")
		playerCardDiv.classList.add("player-cardinplay")
		playerAttackValue.classList.add("attackValue")
		playerHealthValue.classList.add("healthValue")
		oval.classList.add('oval')
		playerCardDiv.appendChild(playerAttackValue)
		playerCardDiv.appendChild(playerHealthValue)
		playerCardDiv.appendChild(oval)
		playerAttackValue.innerText = this.attack
		playerHealthValue.innerText = this.health
		playerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		id1 += 1
		return playerCardDiv
	}
	getPlayerCardsInHandHTML() {
		const playerCardInHandDiv = document.createElement('div')
		const playerCardFaceInHandDiv = document.createElement('div')
		const playerCardBorderInHandDiv = document.createElement('div')
		const playerAttackValueInHand = document.createElement('div')
		const playerHealthValueInHand = document.createElement('div')
		const playerManaValueInHand = document.createElement('div')
		const playerInfoValueInHand = document.createElement('div')
		const playerNameValueInHand = document.createElement('div')
		playerCardInHandDiv.classList.add("card")
		playerCardFaceInHandDiv.classList.add("card-face")
		playerCardBorderInHandDiv.classList.add("card-border")
		playerAttackValueInHand.classList.add("cardAttackValue")
		playerHealthValueInHand.classList.add("cardHealthValue")
		playerManaValueInHand.classList.add("cardManaValue")
		playerInfoValueInHand.classList.add("cardInfoValue")
		playerNameValueInHand.classList.add("cardNameValue")
		playerCardInHandDiv.appendChild(playerCardFaceInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerAttackValueInHand)
		playerCardFaceInHandDiv.appendChild(playerHealthValueInHand)
		playerCardFaceInHandDiv.appendChild(playerManaValueInHand)
		playerCardFaceInHandDiv.appendChild(playerInfoValueInHand)
		playerCardFaceInHandDiv.appendChild(playerCardBorderInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerNameValueInHand)
		playerAttackValueInHand.innerText = this.attack
		playerHealthValueInHand.innerText = this.health
		playerManaValueInHand.innerText = this.mana
		playerInfoValueInHand.innerText = this.info
		playerNameValueInHand.innerText = this.name
		playerCardFaceInHandDiv.style.backgroundImage = "url('" + this.imageString + "')";
		return playerCardInHandDiv
	}
}

function freshDeck() {
	let auchenai_soulpriest = new MinionCard(1, 2, "Your cards and powers that restore Health now deal damage instead.", "src/cards/auchenai_soulpriest.jpg", "Auchenai Soulpriest")
	let bolvar_fordragon = new MinionCard(3, 1, "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.", "src/cards/bolvar_fordragon.jpg", "Bolvar Fordragon")
	let cairne_bloodhoof = new MinionCard(5, 5, "Deathrattle: Summon a 5/5 Baine Bloodhoof.", "src/cards/cairne_bloodhoof.jpg", "Cairne Bloodhoof")
	let dark_whispers = new MinionCard(4, 2, "Battlecry:", "src/cards/dark_whispers.jpg", "Dark Whispers")
	let doom = new MinionCard(4, 5, "Battlecry:", "src/cards/doom.jpg", "Doom")
	let edwin_vancleef = new MinionCard(7, 6, "Combo: Gain +2/+2 for each card played earlier this turn.", "src/cards/edwin_vancleef.jpg", "Edwin Vancleef")
	let flamestrike = new MinionCard(4, 1, "Battlecry:", "src/cards/flamestrike.jpg", "Flamestrike")
	let kabal_crystal_runner = new MinionCard(1, 4, "Costs (2) less for each Secret you've played this game.", "src/cards/kabal_crystal_runner.jpg", "Kabal Crystal Runner")
	let lunar_visions = new MinionCard(8, 6, "Battlecry:", "src/cards/lunar_visions.jpg", "Lunar Visions")
	let mal_ganis = new MinionCard(4, 3, "Your other Demons have +2/+2. Your hero is Immune.", "src/cards/mal_ganis.jpg", "Mal'ganis")
	let reno_jackson = new MinionCard(2, 8, "Battlecry: If your deck has no duplicates, fully heal your hero.", "src/cards/reno_jackson.jpg", "Reno Jackson")
	let saboteur = new MinionCard(2, 4, "Battlecry:", "src/cards/saboteur.jpg", "Saboteur")
	let starfall = new MinionCard(2, 6, "Battlecry:", "src/cards/starfall.png", "Starfall")
	let sylvanas_windrunner = new MinionCard(4, 5, "Battlecry:", "src/cards/sylvanas_windrunner.jpg", "Sylvana Windrunner")
	let tirion_fordring = new MinionCard(3, 5, "Divine Shield, Taunt Deathrattle: Equip a 5/3 Ashbringer.", "src/cards/tirion_fordring.jpg", "Tirion Fordring")
	let unstable_portal = new MinionCard(9, 4, "Battlecry:", "src/cards/unstable_portal.jpg", "Unstable Portal")
	let vaporize = new MinionCard(1, 2, "Battlecry:", "src/cards/vaporize.jpg", "Vaporize")
	let wilfred_fizzlebang = new MinionCard(3, 1, "Battlecry:", "src/cards/wilfred_fizzlebang.jpg", "Wilfred Fizzlebang")
	let worgen_infiltrator = new MinionCard(3, 2, "Stealth", "src/cards/worgen_infiltrator.jpg", "Worgen Infilitrator")
	let ancient_of_lore = new MinionCard(4, 2, "Choose One - Draw 2 cards; or Restore 5 Health.", "src/cards/ancient_of_lore.jpg", "Ancient Of Lore")
	let darnassus_aspirant = new MinionCard(4, 5, "Battlecry: Gain an empty Mana Crystal. Deathrattle: Lose a Mana Crystal.", "src/cards/darnassus_aspirant.jpg", "Darnassus Aspirant")
	let astral_communion = new MinionCard(7, 6, "Battlecry:", "src/cards/astral_communion.jpg", "Astral Communion")
	let anubisath_sentinel = new MinionCard(4, 1, "Battlecry:", "src/cards/anubisath_sentinel.png", "Anubisath Sentinel")
	let dragon_consort = new MinionCard(1, 4, "Battlecry:", "src/cards/dragon_consort.jpg", "Dragon Consort")
	let emperor_thaurissan = new MinionCard(8, 6, "At the end of your turn, reduce the Cost of cards in your hand by (1).", "src/cards/emperor_thaurissan.jpg", "Emperor Thaurissan")
	let elven_archer = new MinionCard(1, 1, "Battlecry: Deal 1 damage.", "src/cards/elven_archer.jpg", "Elven Archer")
	let voodoo_doctor = new MinionCard(2, 1, "Battlecry: Restore 2 Health.", "src/cards/voodoo_doctor.jpg", "Voodoo Doctor")
	let king_krush = new MinionCard(8, 8, "Charge", "src/cards/king_krush.jpg", "King Krush")
	let ragnaros_the_firelord = new MinionCard(8, 8, "Can't attack. At the end of your turn, deal 8 damage to a random enemy.", "src/cards/ragnaros_the_firelord.png", "Ragnaros the Firelord")
	let ragnaros_the_lightlord = new MinionCard(8, 8, "At the end of your turn, restore 8 Health to a damaged friendly character.", "src/cards/ragnaros_the_lightlord.jpg", "Ragnaros the Lightlord")

	return [
	auchenai_soulpriest, 
	bolvar_fordragon, 
	cairne_bloodhoof, 
	dark_whispers, 
	doom, 
	edwin_vancleef, 
	flamestrike, 
	kabal_crystal_runner, 
	lunar_visions, 
	mal_ganis, 
	reno_jackson,
	saboteur,
	starfall,
	sylvanas_windrunner,
	tirion_fordring,
	unstable_portal,
	vaporize,
	wilfred_fizzlebang,
	worgen_infiltrator,
	ancient_of_lore,
	darnassus_aspirant,
	astral_communion,
	anubisath_sentinel,
	dragon_consort,
	emperor_thaurissan,
	elven_archer,
	voodoo_doctor,
	king_krush,
	ragnaros_the_firelord,
	ragnaros_the_lightlord,
	auchenai_soulpriest, 
	bolvar_fordragon, 
	cairne_bloodhoof, 
	dark_whispers, 
	doom, 
	edwin_vancleef, 
	flamestrike, 
	kabal_crystal_runner, 
	lunar_visions, 
	mal_ganis, 
	reno_jackson,
	saboteur,
	starfall,
	sylvanas_windrunner,
	tirion_fordring,
	unstable_portal,
	vaporize,
	wilfred_fizzlebang,
	worgen_infiltrator,
	ancient_of_lore,
	darnassus_aspirant,
	astral_communion,
	anubisath_sentinel,
	dragon_consort,
	emperor_thaurissan,
	elven_archer,
	voodoo_doctor,
	king_krush,
	ragnaros_the_firelord,
	ragnaros_the_lightlord
	]
}