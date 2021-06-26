import Deck from "./deck.js"
var currentAttacker = null;
var collision = new Boolean(null);
var canAttack = new Boolean(null);
const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot = document.querySelector('.board--player')
const hand = document.querySelector('.cards')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const svg = document.getElementById('svg')
const svgpath = document.getElementById('svgpath')
const body = document.getElementById('body')
const playerHero = document.getElementById('playerhero')
const cpuHero = document.getElementById('opposinghero')
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
	let x = 7
	for(let i = 0; i < x; i++) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
		playerCardSlot.appendChild(playerDeck.cards[0].getPlayerHTML())
		computerCardSlot.appendChild(computerDeck.cards[0].getComputerHTML())
    document.getElementsByClassName("player-cardinplay")[i].id = "playerCardInPlay" + i
    document.getElementsByClassName("computer-cardinplay")[i].id = "cpuCardInPlay" + i
    console.log(playerDeck.cards[0])
    console.log(computerDeck.cards[0])
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


document.querySelectorAll('.cardinplay').forEach(function(e){
  e.addEventListener('mousedown', function(e) {
    if(currentAttacker == null) {
      if(this.classList.contains('player-cardinplay')) {
        currentAttacker = this.id
        var xOrigin = e.clientX;
        var yOrigin = e.clientY;
        svg.style.display = "block";
        console.log(currentAttacker + " is attacking.")
    body.addEventListener('mousemove', e2 => {
      var xDest = e2.clientX;
      var yDest = e2.clientY;
      svgpath.setAttribute('d', 'M'+xDest+','+yDest+' '+xOrigin+','+yOrigin+'');
  });
   }} else if((this.classList.contains('computer-cardinplay') || (this.id == 'opposinghero'))) {
        var snd = new Audio("src/sounds/attack.mp3");
        var target = this.id;
        console.log(target + " is being attacked.")

        var currentAttackerElement = document.getElementById(currentAttacker);
        var targetElement = document.getElementById(target);

        var currentAttackerAttack = currentAttackerElement.children[0].innerHTML;
        var currentAttackerHealth = currentAttackerElement.children[1].innerHTML;
        var targetAttack = targetElement.children[0].innerHTML;
        var targetHealth = targetElement.children[1].innerHTML;
        console.log(currentAttackerAttack, currentAttackerHealth, targetAttack, targetHealth)
        currentAttackerHealth = currentAttackerHealth - targetAttack
        targetHealth = targetHealth - currentAttackerAttack
        currentAttackerElement.children[1].innerHTML = currentAttackerHealth
        targetElement.children[1].innerHTML = targetHealth
        setTimeout(function() {
          if(currentAttackerHealth <= 0) {
            currentAttackerElement.style.display = "none";
          }
          if(targetHealth <= 0) {
            targetElement.style.display = "none";
          }
          if (window.getComputedStyle(cpuHero).display === "none") {
            alert("You've Won!")
            location.reload();
          }
          if (window.getComputedStyle(playerHero).display === "none") {
            alert("You've Lost!")
            location.reload();
          }
        },450);
        currentAttacker = null;
        canAttack = false;
        svg.style.display = "none";
        snd.play();
        currentAttacker = null;
    } else {
      alert("Invalid target!")
    }
  });
});



var collisionbox = document.getElementById("collisionbox");
var draggableElements = document.getElementsByClassName("card");
for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        // Checks for collision between elements (the card and collisionbox)
        for(var i = 0; i < draggableElements.length; i++){
          var iElements = draggableElements[i]
          var aRect = collisionbox.getBoundingClientRect();
          var bRect = iElements.getBoundingClientRect();
          if (
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))) {
              console.log("NO COLLISION!")
              collision = false
          } else {
            console.log("Collision!")
            collision = true
            document.querySelectorAll('.card').forEach(function(e){
            e.addEventListener('mouseup', function(e) {
              if(collision == true) {
                iElements.remove();
              }
          });
          });
          }
      }
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
