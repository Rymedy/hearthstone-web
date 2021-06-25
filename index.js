import Deck from "./deck.js"
var currentAttacker = null;
var canAttack = new Boolean(null);
const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot = document.querySelector('.board--player')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const svg = document.getElementById('svg')
const svgpath = document.getElementById('svgpath')
const body = document.getElementById('body')
var cardinplay = document.getElementsByClassName('cardinplay')
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
		computerDeckElement.style.display = "none";
	}
	else {
		computerDeckElement.style.display = "block";
	}

	if (playerDeckElement.innerText === '0') {
		playerDeckElement.style.display = "none";
	}
	else {
		playerDeckElement.style.display = "block";
	}
}

function beginRound() {
		canAttack = true;
}


document.querySelectorAll('.cardinplay').forEach(function(e){
  e.addEventListener('click', function(e) {
    if(currentAttacker == null) {
        currentAttacker = this.id
        var xOrigin = e.clientX;
        var yOrigin = e.clientY;
        svg.style.display = "block";
        console.log("CurrentAttacker has been chosen.")
    body.addEventListener('mousemove', e2 => {
      var xDest = e2.clientX;
      var yDest = e2.clientY;
      svgpath.setAttribute('d', 'M'+xDest+','+yDest+' '+xOrigin+','+yOrigin+'');
  });
    } else {
        var snd = new Audio("src/sounds/attack.mp3");
        var target = this.id;
        console.log("Target has been chosen.")
        svg.style.display = "none";
        snd.play();
        currentAttacker = null;
    }
  });
});

// querySelector only works for the first element and querySelectorAll does not work in the current case.
    var container = document.querySelector(".cards");
	var dragItem = container.querySelector(".card");
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }