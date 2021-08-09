// imports module 'Deck' from deck.js
// import Deck from "./deck.js"
// defines global variables
var iElements = null;
var currentAttacker = null;
var collision = new Boolean(false);
var canAttack = new Boolean(false);
var playersTurn = new Boolean(false);
var alreadyMocked = new Boolean(false);
var gameIsWon = new Boolean(false);
var isTutorial = new Boolean(false);
var tauntExists = new Boolean(false);
var manaCost = null;
var manaCapacity = 1;
var mana = manaCapacity;
var maxOpponentCardsInPlay = 7;
var cardplaceSnd = new Audio("src/sounds/cardplace.mp3")
var mockSnd = new Audio("src/sounds/mock.mp3")
var jobsdoneSnd = new Audio("src/voiceovers/innkeeper_jobs_done.mp3")
var playerturnSnd = new Audio("src/sounds/playerturn.mp3")
var heropowerSnd = new Audio("src/sounds/heropower.mp3")
var amount = 0;
var oldNumOfChild = 0;
var playerHandArray = []
var getNameOfElement = "";
// defines constant variables to refer to HTML elements
const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot2 = document.querySelector('.board--player')
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

/* calls and defines the startGame function to perform 
required functions when the page is loaded. */
function startGame() {
  /* creates a new deck where cards split into 2 equal decks for both 
  the player and AI and shuffled */
	const deck = new Deck()
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  originalDeck = new Deck(deck.cards.slice(0, deck.numberOfCards))
	playerDeck = new Deck(deck.cards.slice(0, 30))
  playerDeck.shuffle()
	computerDeck = new Deck(deck.cards.slice(31, 60))
  computerDeck.shuffle()
	inRound = false
	updateDeckCount()
  // if the player is playing the tutorial start with one 1 mana card
  if (isTutorial == true) {
    for (let i=0; i<playerDeck.cards.length; i++) {
      if (playerDeck.cards[i]['mana'] == 1) {
        hand.appendChild(playerDeck.cards[i].getPlayerCardsInHandHTML())
        break
      }
    }
    // remove a card from both the player's and computer's deck
		playerDeck.cards.shift();
		computerDeck.cards.shift();
		updateDeckCount();
    /* checks to see what cards can be played and if the player has the 
    required mana to play each card */
    checkForRequiredMana();
  } else {
    /* start with 3 cards in hand initially with one of the cards being a 
    guaranteed 1 mana card */
    let x = 2;
    for(let i = 0; i < x; i++) {
      hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
      playerDeck.cards.shift();
      computerDeck.cards.shift();
      updateDeckCount()
    }
    for (let i=0; i<playerDeck.cards.length; i++) {
      if (playerDeck.cards[i]['mana'] == 1) {
        hand.appendChild(playerDeck.cards[i].getPlayerCardsInHandHTML())
        playerDeck.cards.shift();
        computerDeck.cards.shift();
        updateDeckCount();
        break
      }
    }
    checkForRequiredMana();
  }
  createManaCrystal();
  /* ensures the player i playing the tutorial by checking if the 
  computer's health is set to 10 */
  if (document.querySelector('.opposingHeroHealth').innerText == 10) {
    isTutorial = true;
  }
}
/* defines new function that when boolean collision is true between the card and collisionbox element and element is 
created using the getPlayerHTML() function defined in deck.js and is appended as a child into the players' board
and mana is made = to mana - the mana cost of the card */
function placeCardFunc(e) {
  if(collision == true) {
    var found = false;
    setTimeout(function() {
    for(var i = 0; i < originalDeck.cards.length; i++) {
      if ((originalDeck.cards[i]['name'] == getNameOfElement) && (playerCardSlot2.childElementCount != 7)) {
        found = true;
        var manaCost = originalDeck.cards[i]['mana'];
        mana -= manaCost;
        manaElement.innerHTML = mana + "/" + manaCapacity;
        playerCardSlot2.appendChild(originalDeck.cards[i].getPlayerHTML())
        checkForRequiredMana();
        updateManaGUI();
        cardPlaceSnds();
        cardplaceSnd.play();
        /* lets the user know to press the end turn button as they have 
        no more cards left to play */
        if (hand.childElementCount == 0) {
          document.getElementById("gifhint").style.backgroundImage = "url('src/hints/end_turn.gif')";
          document.getElementById("texthint").innerText = "Press the end turn button...";
        }
        break;
      }
    }
  },0.01);
  }
}

/* defines function that updates the mana GUI at the bottom left of the screen
whenever mana is spent or the player's turn has just started */
function updateManaGUI() {
  var manaCrystals = document.getElementsByClassName("manabox");
  for (let i=0; i<manaCrystals.length; i++) {
    if (i == 1) {
      manaCrystals[manaCrystals.length-1].style.backgroundColor = "black";
    }
    else if (i == 2) {
      manaCrystals[manaCrystals.length-2].style.backgroundColor = "black";
    }
    else if (i == 3) {
      manaCrystals[manaCrystals.length-3].style.backgroundColor = "black";
    }
    else if (i == 4) {
      manaCrystals[manaCrystals.length-4].style.backgroundColor = "black";
    }
    else if (i == 5) {
      manaCrystals[manaCrystals.length-5].style.backgroundColor = "black";
    }
    else if (i == 6) {
      manaCrystals[manaCrystals.length-6].style.backgroundColor = "black";
    }
    // once the amount of iterations is equal to the mana cost stop the loop
    if (i == manaCost) {
      break
    }
  }
}

// defines a new function that adds an event listener (mouseup) to all elements with the class name 'card' then calls the placeCardFunc()
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
  document.querySelector("#endturn").style.zIndex = "50";
  document.getElementById("gifhint").style.backgroundImage = "url('src/hints/attack.gif')";
  document.getElementById("texthint").innerText = "Click on an green glowing allied card then click on an enemy to attack.";
  opponentTurn()
});
/* defines new function that calls the getComputerHTML function from deck.js using the first card at the top of the computers' deck and appends as a child to 
the computers board and uses the shift method to remove the first card in the array then proceeds to call both updateDeckCount and playerTurn functions. */
function opponentTurn() {
  playersTurn = false;
  for (let i=0; i<playerCardSlot2.childElementCount; i++) {
    playerCardSlot2.children[i].style.boxShadow = "none";
  }
  for (let i=0; i<hand.childElementCount; i++) {
    hand.children[i].children[0].children[4].style.border = "solid 4px rgb(56, 56, 56)";
  }
  document.getElementById("playerheropower").style.boxShadow = "none";
  document.body.style.cursor = "url(src/cursor/spectate.png) 10 2, auto";
  document.getElementById("computerTurn").style.display = "block";
  document.getElementById("endturn").style.backgroundColor = "grey";
  document.getElementById("endturn").innerText = "ENEMY TURN";
  if (computerCardSlot.childElementCount != 0) {
  /* calls function defined in AI.js (determines what the computer 
  attacks and with what minions) */
  setTimeout(function() {
    AI();
  },1250)
  // stops the AI from having more than 7 cards on the board at a time
  setTimeout(function() {
    let opponentCardsInPlay = computerCardSlot.childElementCount;
    if(opponentCardsInPlay != maxOpponentCardsInPlay) {
      computerCardPlace();
      // to fix position of board GUI onclick
      if(opponentCardsInPlay >= 0) {
        computerCardSlot.style.transform = "translateY(17.5%)"; 
      }
    }
    setTimeout(function() {
      playerTurn();
    },1000)
  },2500)
  } else {
    // places card if number of cards on board has not reached the max amount (10)
    setTimeout(function() {
      let opponentCardsInPlay = computerCardSlot.childElementCount;
      if(opponentCardsInPlay != maxOpponentCardsInPlay) {
        computerCardPlace();
        // to fix position of board GUI onclick
        if(opponentCardsInPlay >= 0) {
          computerCardSlot.style.transform = "translateY(17.5%)"; 
        }
      }
      // then calls the player turn function allowing the player to play his turn
      setTimeout(function() {
        playerTurn();
      },1000)
    },1250)
  }
}

/* places a card onto the computers board whose mana is equal 
to the player's mana capacity */
function computerCardPlace() {
  for (let i=0; i<computerDeck.cards.length; i++) {
    if (computerDeck.cards[i]['mana'] == manaCapacity) {
      computerCardSlot.appendChild(computerDeck.cards[i].getComputerHTML())
      var index = computerDeck.cards.indexOf(i);
      cardplaceSnd.play();
      break
    /* if the player's mana capacity is at the maxiumum (10) then 
    plays the card at the top of the computer's deck */
    } else if (manaCapacity == 10) {
      computerCardSlot.appendChild(computerDeck.cards[0].getComputerHTML())
      break
    }
  }
  // removes the card that was placed from the deck
  computerDeck.cards.splice(index, 1);
  // updates the deck count innerHTML
  updateDeckCount();
}

/* the player turn function allows the player ot place cards and attack 
computer minions increments the mana capcity if manacapcity is not at 
the maximum (10) and displays the mana and manaCapacity in an element's
innerHTML and checks what cards can played and if the player has the
required mana to play the card for every card in the player's hand and
if so makes the boxShadow css property green*/
function playerTurn() {
  playersTurn = true;
  if (manaCapacity != 10) {
    manaCapacity++;
    createManaCrystal();
  }
  mana = manaCapacity
  manaElement.innerHTML = mana + "/" + manaCapacity;
  var manaCrystals = document.getElementsByClassName("manabox");
  for (let i=0; i<manaCrystals.length; i++) {
    manaCrystals[i].style.backgroundColor = "#3669c9";
  }
  oldNumOfChild = playerCardSlot2.childElementCount;
  playerturnSnd.play();
  document.body.style.cursor = "url(src/cursor/cursor.png) 10 2, auto";
  document.getElementById("playerheropower").style.boxShadow = "0px 2px 15px 12px #0FCC00";
  document.getElementById("playerheropower").classList.add("canAttack");
  document.getElementById("computerTurn").style.display = "none";
  document.getElementById("endturn").style.backgroundColor = "#4ce322";
  document.getElementById("endturn").innerText = "END TURN";
  // mock's the user (dialogue) if it has been their turn for 30secs+
  setTimeout(function() {
    if ((playersTurn == true) && (alreadyMocked == false) && (gameIsWon == false) && (isTutorial == false)) {
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
  // the player draws a card if their hand is not full (max cards in hand 10 cards)
  if(hand.childElementCount != 10) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
  }
  checkForRequiredMana();
  attack();
  enableDrag();
  /* Removes all event listeners from elements with the class name 'card' for function placeCardFunc
  on mouseup to ensure elements do not have more than 1 event listener when the placeCard() function is called. */
  document.querySelectorAll('.card').forEach(function(e){
    e.removeEventListener('mouseup', placeCardFunc);
  });
  placeCard()
  playerDeck.cards.shift();
  updateDeckCount()
}
/* checks if the player has enough mana to play each card in their hand 
and if so makes the border of the card green */
function checkForRequiredMana() {
  for (let i=0; i<draggableElements.length; i++) {
    if (mana < draggableElements[i].children[0].children[2].innerText) {
      draggableElements[i].style.pointerEvents = "none";
      draggableElements[i].children[0].children[4].style.border = "solid 4px rgb(56, 56, 56)";
    } else {
      draggableElements[i].style.pointerEvents = "all";
      draggableElements[i].children[0].children[4].style.border = "solid 4px #0FCC00";
    }
  }
  if (mana < 2) {
    document.getElementById("playerheropower").style.boxShadow = "none";
    document.getElementById("playerheropower").style.pointerEvents = "none";
  } else {
    document.getElementById("playerheropower").style.pointerEvents = "all";
  }
}
// creates an element inside the element with id "manacontainer"
function createManaCrystal() {
  const manacontainer = document.getElementById("manacontainer");
  const manacrystal = document.createElement('div');
  manacrystal.classList.add("manabox");
  manacontainer.appendChild(manacrystal);
}
/* the following functions allow the user to drag cards 
from the hand onto the board */
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
        e = e || window.event;
        iElements = e.target;
        elmnt.style.position = "absolute";
        elmnt.style.left = e.clientX + "px";
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
        // sets the position of the element to the position of the mouse
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        // Checks for collision between elements (the card and collisionbox)
          var aRect = collisionbox.getBoundingClientRect();
          var bRect = iElements.getBoundingClientRect();
          if (
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))) {
              collision = false;
          } else {
            collision = true;
            document.querySelectorAll('.card').forEach(function(e){
            e.addEventListener('mouseup', function(e) {
              if((collision == true) && (playerCardSlot2.childElementCount != 7)) {
                getNameOfElement = iElements.children[0].children[5].innerText;
                iElements.remove();
              }
          });
          });
      }
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
startGame();
placeCard();
enableDrag();

// disable and enable screen shakes (options menu)
const screenshakebtn = document.getElementById('togglescreenshake')
var isScreenShake = new Boolean(true);
screenshakebtn.onclick = function () {
  if (isScreenShake == true) {
      isScreenShake = false;
      console.log("Screen Shaking has been set to " + isScreenShake);
    } else if (isScreenShake == false) {
      isScreenShake = true;
      console.log("Screen Shaking has been set to " + isScreenShake);
    }
};
