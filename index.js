// imports module 'Deck' from deck.js
import Deck from "./deck.js"
// defines global variables
var currentAttacker = null;
var collision = new Boolean(null);
var canAttack = new Boolean(null);
var playersTurn = new Boolean(null);
var alreadyMocked = new Boolean(false);
var gameIsWon = new Boolean(false);
var manaCost = null;
var manaCapacity = 1;
var mana = manaCapacity;
var maxOpponentCardsInPlay = 7;
var cardplaceSnd = new Audio("src/sounds/cardplace.mp3")
var mockSnd = new Audio("src/sounds/mock.mp3")
var amount = 0;
var playerHandArray = []
var getNameOfElement = "";
// defines constant variables to refer to HTML elements
var computerCardSlot = document.querySelector('.board--opponent')
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
const manaElement = document.getElementById('mana');
let originalDeck, playerDeck, computerDeck, inRound

// calls and defines the startGame function to perform required functions when the page is loaded.
startGame()
function startGame() {
  // creates a new deck where cards are shuffled and split into 2 equal decks for both the player and AI
	const deck = new Deck()
	deck.shuffle()
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  originalDeck = new Deck(deck.cards.slice(0, deck.numberOfCards))
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
	inRound = false
	updateDeckCount()
  // start with 3 cards in hand initially
	let x = 3
	for(let i = 0; i < x; i++) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
		playerDeck.cards.shift();
		computerDeck.cards.shift();
		updateDeckCount()
	}
}
/* defines new function that when boolean collision is true between the card and collisionbox element and element is 
created using the getPlayerHTML() function defined in deck.js and is appended as a child into the players' board */
function placeCardFunc(e) {
  if(collision == true) {
    var found = false;
    setTimeout(function() {
    for(var i = 0; i < originalDeck.cards.length; i++) {
      if ((originalDeck.cards[i]['name'] == getNameOfElement) && (playerCardSlot.childElementCount != 7)) {
        found = true;
        playerCardSlot.appendChild(originalDeck.cards[i].getPlayerHTML())
        cardplaceSnd.play();
        break;
      }
    }
  },0.01);
    // console.log(playerDeck.cards[0]['name'])
   // Change this to playerCardSlot.appendChild([THE CARD].getPlayerHTML()); maybe cycle thru the array playerDeck.cards to find if name is = to the name of the card being placed 
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
	if(computerDeckElement.innerText === '0') {
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
});
/* defines new function that calls the getComputerHTML function from deck.js using the first card at the top of the computers' deck and appends as a child to 
the computers board and uses the shift method to remove the first card in the array then proceeds to call both updateDeckCount and playerTurn functions. */
function opponentTurn() {
  playersTurn = false;
  // calls function defined in AI.js
  AI()
  // stops the AI from having more than 7 cards on the board at a time
  let opponentCardsInPlay = computerCardSlot.childElementCount;
  if(opponentCardsInPlay != maxOpponentCardsInPlay) {
    computerCardSlot.appendChild(computerDeck.cards[0].getComputerHTML())
    cardplaceSnd.play();
    computerDeck.cards.shift();
    updateDeckCount()
  }
  // to fix position of board GUI onclick
  if(opponentCardsInPlay >= 0) {
    computerCardSlot.style.transform = "translateY(17.5%)"; 
  }
  playerTurn()
}

function playerTurn() {
  playersTurn = true;
  manaCapacity += 1
  mana = manaCapacity
  manaElement.innerHTML = mana + "/" + manaCapacity;
  setTimeout(function() {
    if ((playersTurn == true) && (alreadyMocked == false) && (gameIsWon == false)) {
      alreadyMocked = true;
      mockSnd.play();
      setTimeout(function() {
        document.querySelector("#computerbubble").innerText = "Go ahead. End\nyour turn, so that\nI can end you!";
        document.querySelector("#computerbubble").style.visibility = "visible";
        document.querySelector('#computerbubble').classList.add("openMenuAnim");
        setTimeout(function() {
          document.querySelector('#computerbubble').classList.add("easeOutAnim");
          document.querySelector('#computerbubble').classList.remove("openMenuAnim");
          setTimeout(function(){
            document.querySelector("#computerbubble").style.visibility = "hidden";
            document.querySelector('#computerbubble').classList.remove("easeOutAnim");
          },250);
        },5000);
      },250);
    }
  },30000)

  if(hand.childElementCount != 10) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
  }
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
    document.getElementsByClassName("player-cardinplay")[i].style.border = "solid 3px rgba(0, 230, 64, 1)"; 
    document.getElementsByClassName("player-cardinplay")[i].children[2].style.border = "solid 4px rgba(0, 230, 64, 1)";
    document.getElementsByClassName("player-cardinplay")[i].children[2].style.animation = "shake 0.5s";
    document.getElementsByClassName("player-cardinplay")[i].children[2].style.animationIterationCount = "infinite";
    document.getElementsByClassName("player-cardinplay")[i].classList.add("canAttack")
}
document.querySelectorAll('.cardinplay').forEach(function(e){
  e.addEventListener('mousedown', function(e) {
    if(currentAttacker == null) {
      if((this.classList.contains('player-cardinplay')) && (this.classList.contains('canAttack'))) {
        playerCardSlot.style.zIndex = "1"
        computerCardSlot.style.zIndex = "2"
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
        playerCardSlot.style.zIndex = "2"
        computerCardSlot.style.zIndex = "1"
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
            if (document.querySelector('.playerHeroHealth').innerText <= 0) {
              alert("You've Lost!")
              location.reload();
            }
            currentAttackerElement.remove();
          }
          if(targetHealth <= 0) {
            if (document.querySelector('.opposingHeroHealth').innerText <= 0) {
              gameIsWon = true;
              setTimeout(function() {
                document.getElementById('fireworkCanvas').style.display = "block";
                document.getElementById('fireworkCanvas').classList.add("fadeInAnim");
              },3000);
              song.pause();
              let victorySnd = new Audio("src/sounds/victory.mp3");
              victorySnd.play();
              setTimeout(function() {
                document.querySelector("#computerbubble").innerText = "I see... only\ndarkness\nbefore me...";
                document.querySelector("#computerbubble").style.visibility = "visible";
                document.querySelector('#computerbubble').classList.add("openMenuAnim");
                setTimeout(function() {
                  document.querySelector('#computerbubble').classList.add("easeOutAnim");
                  document.querySelector('#computerbubble').classList.remove("openMenuAnim");
                  setTimeout(function(){
                    document.querySelector("#computerbubble").style.visibility = "hidden";
                    document.querySelector('#computerbubble').classList.remove("easeOutAnim");
                  },250);
                },5000);
              },250);
              // adjust position of player board to fix GUI
              let opponentCardsInPlay = computerCardSlot.childElementCount;
              computerCardSlot.style.transform = "translateY(17.5%)"; 
              // body.onclick = function () {
              //  location.reload();
              // };
              document.getElementById("game").classList.add("screenShakeAnim");
              setTimeout(function() {
              document.getElementById("game").style.filter = "blur(5px)";
              document.getElementById("victory").style.display = "block";
              setTimeout(function() {
                document.getElementById('fireworkCanvas').classList.add("fadeOutAnim");
                setTimeout(function() {
                document.getElementById('fireworkCanvas').style.display = "none";
                },1000);
              },5000);
            },5000);
            } else {
            targetElement.remove();
            // adjust position of player board to fix GUI
            let opponentCardsInPlay = computerCardSlot.childElementCount;
            if(opponentCardsInPlay == 0) {
              computerCardSlot.style.transform = "translateY(57.5%)"; 
            }
          }
        }
        },250);
        var currentAttackersElement = document.getElementById(currentAttacker);
        currentAttacker = null;
        canAttack = false;
        svg.style.display = "none";
        currentAttackerElement.classList.remove("canAttack");
        if(currentAttackersElement.classList.contains('player-cardinplay')) {
          snd.play();
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
              if((collision == true) && (playerCardSlot.childElementCount != 7)) {
                var manaCost = iElements.children[0].children[2].innerText;
                getNameOfElement = iElements.children[0].children[5].innerText;
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
