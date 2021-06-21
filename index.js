import Deck from "./deck.js"
var currentAttacker = null;
var canAttack = new Boolean(null);
const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot = document.querySelector('.board--player')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')

let playerDeck, computerDeck, inRound

startGame()
function startGame() {
	const deck = new Deck()
	deck.shuffle()

	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
	inRound = false

	console.log(playerDeck)
	console.log(computerDeck)

	updateDeckCount()
	beginRound()
	let x = 7
	for(let i = 0; i < x; i++) {
		playerCardSlot.appendChild(playerDeck.cards[0].getPlayerHTML())
		computerCardSlot.appendChild(computerDeck.cards[0].getComputerHTML())
		playerDeck.cards.shift();
		computerDeck.cards.shift();
		updateDeckCount()
	}
}

function updateDeckCount() {
	computerDeckElement.innerText = computerDeck.numberOfCards
	playerDeckElement.innerText = playerDeck.numberOfCards
	if (computerDeckElement.innerText === '0') {
		$("#computerDeck").hide();
	}
	else {
		$("#computerDeck").show();
	}

	if (playerDeckElement.innerText === '0') {
		$("#playerDeck").hide();
	}
	else {
		$("#playerDeck").show();
	}
}

function beginRound() {
	canAttack = true;
}

function updateHealth() {

}

// Attack Animation
$(".cardinplay").on("mousedown", function(e){
	if(currentAttacker === null) {
		if($(this).hasClass("player-cardinplay")) {
	    	currentAttacker = $(this);
	    	var xOrigin = e.pageX;
	        var yOrigin = e.pageY;
	    	$("svg").show();
    	}
	$("body").on("mousemove", function(e2){
		var xDest = e2.pageX;
		var yDest = e2.pageY;
		$("svg path").attr('d', 'M'+xDest+','+yDest+' '+xOrigin+','+yOrigin+'');
    });
}
	else if(($(this).hasClass("computer-cardinplay")) || ($(this).is("#opposinghero"))){
		var snd = new Audio("attack.mp3");
    	var target = $(this),
        xEnd = e.pageX - (target.width()/2),
        yEnd = e.pageY - (target.height()/2),
        xStart = currentAttacker.offset().left,
        yStart = currentAttacker.offset().top;
        // Attack Algorithm
        console.log('currentAttacker', currentAttacker.children()[0].innerHTML);
        var currentAttackerAttack = currentAttacker.children()[0].innerHTML;
		var currentAttackerHealth = currentAttacker.children()[1].innerHTML;
		var targetAttack = target.children()[0].innerHTML;
		var targetHealth = target.children()[1].innerHTML;
		console.log(currentAttackerAttack, currentAttackerHealth, targetAttack, targetHealth)
		currentAttackerHealth = currentAttackerHealth - targetAttack
		targetHealth = targetHealth - currentAttackerAttack
		currentAttacker.children()[1].innerHTML = currentAttackerHealth
		target.children()[1].innerHTML = targetHealth
    
    	$("svg").hide();
    	snd.play();
    
    	$(currentAttacker).velocity({
			translateZ: 0,
			translateX: ""+xEnd - xStart+"px",
			translateY: ""+(yEnd - yStart)+"px"
    	},
    	{
      		duration: 200,
      		easing: [.7,.3,.73,.37]
    	}).velocity("reverse", { duration: 600, easing: [.01,.92,.09,.99]});
    	setTimeout(function() {
    	    if(currentAttackerHealth <= 0) {
    			currentAttacker.hide();
    		}
    		if(targetHealth <= 0) {
    			target.hide();
    		}
    		if($("#opposinghero").is(":hidden")) {
    			alert("You've Won!")
    		}
    		if($("#playerhero").is(":hidden")) {
    			alert("You've Lost!")
    		}
    		currentAttacker = null;
    		canAttack = false;
    	},500);
  	} else {
  		alert("That is not a valid target!");
  	}
});


