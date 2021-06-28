// imports module 'Deck' from deck.js
import Deck from "./deck.js"
// defines global variables
var currentAttacker = null;
var collision = new Boolean(null);
var canAttack = new Boolean(null);
var manaCost = null;
var manaCapacity = 1;
var mana = manaCapacity;
// soundtrack's to be randomly selected in game
var items = [
"src/ost/mulligan.mp3", 
"src/ost/bad_reputation.mp3", 
"src/ost/better_hand.mp3", 
"src/ost/dont_let_your_guard_down.mp3",
"src/ost/duel.mp3",
"src/ost/the_forge.mp3"
]
var amount = 0;
// randomly selects an element from the array 'items'
var item = items[Math.floor(Math.random()*items.length)];
// converts the string into an audio element
var song = new Audio(item);
/* boolean to check if the audio is already playing to ensure multiple audio 
files do not play at the same time when the end turn button is clicked */
var audioIsPlayed = new Boolean(false)
var playerHandArray = []
// defines constant variables to refer to HTML elements
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
const cardinplay = document.getElementsByClassName('cardinplay')
const collisionbox = document.getElementById("collisionbox");
const draggableElements = document.getElementsByClassName("card");
let playerDeck, computerDeck, inRound

// calls and defines the startGame function to perform required functions when the page is loaded.
startGame()
function startGame() {
  // creates a new deck where cards are shuffled and split into 2 equal decks for both the player and AI
	const deck = new Deck()
	deck.shuffle()
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
	inRound = false
	updateDeckCount()
	let x = 3
	for(let i = 0; i < x; i++) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
		playerDeck.cards.shift();
		computerDeck.cards.shift();
		updateDeckCount()
	}
}
// plays a random song and sets the volume to 70% from the array defined above
song.play()
song.volume = 0.7;
/* defines new function that when boolean collision is true between the card and collisionbox element and element is 
created using the getPlayerHTML() function defined in deck.js and is appended as a child into the players' board */
function placeCardFunc(e) {
  if(collision == true) {
    playerCardSlot.appendChild(playerDeck.cards[0].getPlayerHTML()) // Change this to playerCardSlot.appendChild([THE CARD].getPlayerHTML())
  }
}
// defines a new function that adds an event listener (mouseup) to all elements with the class name 'card' then calls the placeCardFunc()
placeCard()
function placeCard() {
document.querySelectorAll('.card').forEach(function(e){
  e.addEventListener('mouseup', placeCardFunc);
});
}
/* defines new function that updates the HTML and makes it equal to the current number of cards in each deck 
then checks if either the players or computers deck is empty and if so the deck is no longer made visible */
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
/* adds an event listener to the end turn button where when clicked plays an audio file and calls the 
opponentTurn function then checks if the audio has been played yet and if not plays it and sets audioIsPlayed to false */
document.getElementById("endturn").addEventListener("click", function() {
  var endturn = new Audio("src/sounds/endturn.mp3");
  endturn.play();
  opponentTurn()
  if(audioIsPlayed == false) {
    song.play()
    song.volume = 0.7;
    audioIsPlayed = true;
}
});
/* defines new function that calls the getComputerHTML function from deck.js using the first card at the top of the computers' deck and appends as a child to 
the computers board and uses the shift method to remove the first card in the array then proceeds to call both updateDeckCount and playerTurn functions. */
function opponentTurn() {
  computerCardSlot.appendChild(computerDeck.cards[0].getComputerHTML())
  computerDeck.cards.shift();
  updateDeckCount()
  playerTurn()
}

function playerTurn() {
  manaCapacity += 1
  mana = manaCapacity
  playerHandArray.push(playerDeck.cards[0])
  console.log(playerHandArray)
  hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
  attack()
  enableDrag()
  /* Removes all event listeners from elements with the class name 'card' for function placeCardFunc
  on mouseup to ensure elements do not have more than 1 event listener when the placeCard() function is called. */
  document.querySelectorAll('.card').forEach(function(e){
    e.removeEventListener('mouseup', placeCardFunc);
  });
  placeCard()
  playerDeck.cards.shift();
  updateDeckCount()
}

function attack() {
var numOfChild = playerCardSlot.childElementCount;
for(let i=0; i<numOfChild; i++) {
  document.getElementById("playerCardInPlay" + i).style.border = "solid 3px rgba(0, 230, 64, 1)"; 
  document.getElementById("playerCardInPlay" + i).children[2].style.border = "solid 4px rgba(0, 230, 64, 1)";
  document.getElementById("playerCardInPlay" + i).children[2].style.animation = "shake 0.5s";
  document.getElementById("playerCardInPlay" + i).children[2].style.animationIterationCount = "infinite";
}
amount += 1;
document.querySelectorAll('.cardinplay').forEach(function(e){
  e.addEventListener('mousedown', function(e) {
    if(currentAttacker == null) {
      if(this.classList.contains('player-cardinplay')) {
        currentAttacker = this.id
        var xOrigin = e.clientX;
        var yOrigin = e.clientY;
        svg.style.display = "block";
    body.addEventListener('mousemove', e2 => {
      var xDest = e2.clientX;
      var yDest = e2.clientY;
      svgpath.setAttribute('d', 'M'+xDest+','+yDest+' '+xOrigin+','+yOrigin+'');
  });
   }} else if((this.classList.contains('computer-cardinplay') || (this.id == 'opposinghero'))) {
        var snd = new Audio("src/sounds/attack.mp3");
        var target = this.id;

        var currentAttackerElement = document.getElementById(currentAttacker);
        var targetElement = document.getElementById(target);

        var currentAttackerAttack = currentAttackerElement.children[0].innerHTML;
        var currentAttackerHealth = currentAttackerElement.children[1].innerHTML;
        var targetAttack = targetElement.children[0].innerHTML;
        var targetHealth = targetElement.children[1].innerHTML;
        currentAttackerHealth = currentAttackerHealth - targetAttack
        targetHealth = targetHealth - currentAttackerAttack
        currentAttackerElement.children[1].innerHTML = currentAttackerHealth
        targetElement.children[1].innerHTML = targetHealth
        currentAttackerElement.style.border = "solid 3px black";
        currentAttackerElement.children[2].style.border = "solid 4px black";
        currentAttackerElement.children[2].style.animation = "none";
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
        },250);
        var currentAttackersElement = document.getElementById(currentAttacker);
        currentAttacker = null;
        canAttack = false;
        svg.style.display = "none";
        if(currentAttackersElement.classList.contains('player-cardinplay')) {
          snd.play();
        } else {

        }
        currentAttacker = null;
    } 
  });
});
}
enableDrag()
function enableDrag() {
  for(var i = 0; i < draggableElements.length; i++){
      dragElement(draggableElements[i]);
  }
}
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        collision = false
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
              collision = false
          } else {
            collision = true
            document.querySelectorAll('.card').forEach(function(e){
            e.addEventListener('mouseup', function(e) {
              if(collision == true) {
                var manaCost = iElements.children[0].children[2].innerText;
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