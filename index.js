// imports module 'Deck' from deck.js
// import Deck from "./deck.js"
// defines global variables
var currentAttacker = null;
var collision = new Boolean(false);
var canAttack = new Boolean(false);
var playersTurn = new Boolean(false);
var alreadyMocked = new Boolean(false);
var gameIsWon = new Boolean(false);
var isTutorial = new Boolean(false);
var manaCost = null;
var manaCapacity = 1;
var mana = manaCapacity;
var maxOpponentCardsInPlay = 7;
var cardplaceSnd = new Audio("src/sounds/cardplace.mp3")
var mockSnd = new Audio("src/sounds/mock.mp3")
var jobsdoneSnd = new Audio("src/voiceovers/innkeeper_jobs_done.mp3")
var amount = 0;
var oldNumOfChild = 0;
var playerHandArray = []
var getNameOfElement = "";
// defines constant variables to refer to HTML elements
var computerCardSlot = document.querySelector('.board--opponent')
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
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  playerDeck.shuffle()
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  computerDeck.shuffle()
	inRound = false
	updateDeckCount()
  // start with 3 cards in hand initially
  if (isTutorial == true) {
    hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
		playerDeck.cards.shift();
		computerDeck.cards.shift();
		updateDeckCount()
  } else {
    let x = 3
    for(let i = 0; i < x; i++) {
      hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
      playerDeck.cards.shift();
      computerDeck.cards.shift();
      updateDeckCount()
    }
  }
}
/* defines new function that when boolean collision is true between the card and collisionbox element and element is 
created using the getPlayerHTML() function defined in deck.js and is appended as a child into the players' board */
function placeCardFunc(e) {
  if(collision == true) {
    var found = false;
    setTimeout(function() {
    for(var i = 0; i < originalDeck.cards.length; i++) {
      if ((originalDeck.cards[i]['name'] == getNameOfElement) && (playerCardSlot2.childElementCount != 7)) {
        found = true;
        playerCardSlot2.appendChild(originalDeck.cards[i].getPlayerHTML())
        cardplaceSnd.play();
        if (hand.childElementCount == 0) {
          document.getElementById("gifhint").style.backgroundImage = "url('src/hints/end_turn.gif')";
          document.getElementById("texthint").innerText = "Press the end turn button...";
        }
        break;
      }
    }
  },0.01);
    // console.log(playerDeck.cards[0]['name'])
   // Change this to playerCardSlot2.appendChild([THE CARD].getPlayerHTML()); maybe cycle thru the array playerDeck.cards to find if name is = to the name of the card being placed 
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
  document.getElementById("texthint").innerText = "Click on an green bordered allied card then click on an enemy to attack.";
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
    console.log('computerDeckElement', computerDeckElement);
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
  oldNumOfChild = playerCardSlot2.childElementCount;
  if (document.querySelector('.opposingHeroHealth').innerText == 10) {
    isTutorial = true;
  }
  // mock's the user if it has been their turn for 30secs+
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
/* gives all current cards on the board the ability to attack by giving the card
class 'canAttack', when attacking the card is checked to see if the card has
this class.*/
function attack() {
  var numOfChild = playerCardSlot2.childElementCount;
  for(let i=0; i<numOfChild; i++) {
    document.getElementsByClassName("player-cardinplay")[i].style.boxShadow = "0px 2px 15px 12px #0FCC00"; 
    document.getElementsByClassName("player-cardinplay")[i].classList.add("canAttack");
}
// attacking algorithm
document.querySelectorAll('.cardinplay').forEach(function(e){
  e.addEventListener('mousedown', function(e) {
    if(currentAttacker == null) {
      if((this.classList.contains('player-cardinplay')) && (this.classList.contains('canAttack'))) {
        playerCardSlot2.style.zIndex = "1"
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
        playerCardSlot2.style.zIndex = "2"
        computerCardSlot.style.zIndex = "1"
        var attackSnd = new Audio("src/sounds/attack.mp3");
        var bigHitSnd = new Audio("src/sounds/bigattack.mp3");
        var target = this.id;

        var currentAttackerElement = document.getElementById(currentAttacker);
        var targetElement = document.getElementById(target);

        var currentAttackerAttack = currentAttackerElement.children[0].children[0].innerHTML;
        var currentAttackerHealth = currentAttackerElement.children[1].children[0].innerHTML;
        var targetAttack = targetElement.children[0].children[0].innerHTML;
        var targetHealth = targetElement.children[1].children[0].innerHTML;
        currentAttackerHealth -= targetAttack;
        targetHealth -= currentAttackerAttack;
        currentAttackerElement.children[1].children[0].innerHTML = currentAttackerHealth;
        targetElement.children[1].children[0].innerHTML = targetHealth;
        currentAttackerElement.children[1].children[0].style.color = "#f20301";
        targetElement.children[1].children[0].style.color = "#f20301";
        if ((currentAttackerAttack >= 5) && (isScreenShake == true)) {
          document.getElementById("game").classList.add("bigHitAnim");
          setTimeout(function() {
            document.getElementById("game").classList.remove("bigHitAnim");
          },200);
        }
        if(targetElement.id == 'opposinghero') {
          document.querySelector("#computerdamagevalue").innerText = "-" + currentAttackerAttack;
          document.querySelector("#computerdamagecontainer").style.visibility = "visible";
          document.getElementById('computerdamagecontainer').style.opacity="1";
          document.getElementById('computerdamagecontainer').style.transition="none";
          document.querySelector("#computerdamagelabel").classList.add("openMenuAnim");
          document.querySelector("#computerdamagevalue").classList.add("openMenuAnim");
          document.querySelector("#computerdamagelabel").classList.remove("fadeOutAnim");
          document.querySelector("#computerdamagevalue").classList.remove("fadeOutAnim");
          setTimeout(function() {
            document.querySelector("#computerdamagelabel").classList.add("fadeOutAnim");
            document.querySelector("#computerdamagevalue").classList.add("fadeOutAnim");
            document.querySelector("#computerdamagelabel").classList.remove("openMenuAnim");
            document.querySelector("#computerdamagevalue").classList.remove("openMenuAnim");
            setTimeout(function() {
              document.getElementById('computerdamagecontainer').style.visibility="hidden";
              document.getElementById('computerdamagecontainer').style.opacity="0";
            },1000);
          },2000);
        }
        currentAttackerElement.style.boxShadow = "none";
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
              document.querySelector("#endturn").style.zIndex = "1";
              if (isTutorial == true) {
                var hasPlayedTutorial = "true";
                var hasPlayedTutorial_serialized = JSON.stringify(hasPlayedTutorial); 
                localStorage.setItem("hasPlayedTutorial", hasPlayedTutorial_serialized);
                var hasPlayedTutorial_deserailized = JSON.parse(localStorage.getItem("hasPlayedTutorial"));
                console.log(hasPlayedTutorial_deserailized);
              }
              document.getElementById('block').style.opacity = "0";
              document.getElementById('block').style.visibility = "visible";
              setTimeout(function() {
                document.getElementById('fireworkCanvas').style.display = "block";
                document.getElementById('fireworkCanvas').classList.add("fadeInAnim");
              },3000);
              if (isTutorial == true) {
                let victorySnd = new Audio("src/sounds/victorytutorial.mp3");
                victorySnd.play();
                song.pause();
              } else {
                lichkingOST.pause();
                let victorySnd = new Audio("src/sounds/victory.mp3");
                victorySnd.play();
                var myGold = Number(localStorage.getItem('myGold'));
                myGold += 10; // number of gold earned per win
                localStorage.setItem('myGold', myGold.toString());
                // 20% or 1/5 chance of getting a pack on win
                var chanceGetPack = Math.random();
                if (chanceGetPack < 0.2) {
                  var myPacks = Number(localStorage.getItem('myPacks'));
                  myPacks += 1;
                  localStorage.setItem('myPacks', myPacks.toString());
                }
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
              }
              // adjust position of player board to fix GUI
              let opponentCardsInPlay = computerCardSlot.childElementCount;
              computerCardSlot.style.transform = "translateY(17.5%)"; 
              setTimeout(function() {
                document.querySelector(".opponenthero").style.display = "none";
                if (isScreenShake == true) {
                  document.getElementById("game").classList.remove("shakeScreenAnim");
                  document.getElementById("game").classList.add("shakeScreenAnim");
                }
              },750);
              setTimeout(function() {
              document.getElementById("game").style.filter = "blur(5px)";
              document.getElementById('block').style.visibility = "hidden";
              document.getElementById("victory").style.display = "block";
              document.getElementById("victoryImg1").classList.add("openMenuAnim");
              document.getElementById("victoryImg2").classList.add("openMenuAnim");
              document.getElementById("victorylabel").classList.add("openMenuAnim");
              setTimeout(function() {
                document.getElementById('fireworkCanvas').classList.add("fadeOutAnim");
                setTimeout(function() {
                  document.getElementById('fireworkCanvas').style.display = "none";
                  setTimeout(function() {
                    location.reload();
                  },9000);
                  if (isTutorial == false) {
                    setTimeout(function() {
                      document.getElementById('victoryImg1').style.visibility="hidden";
                      document.getElementById('victoryImg1').style.opacity="0";
                      document.getElementById('victoryImg1').style.transition="visibility 0s 2s, opacity 2s linear";
                    },4000);
                  } else if (isTutorial == true) {
                    document.getElementById('victoryhint').style.display = "block";
                    document.getElementById('victoryhint').classList.add("openMenuAnim");
                  }
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
        if ((hand.childElementCount == 0) || (mana == 0)) {
          for(let i=0; i<oldNumOfChild; i++) {
            if (playerCardSlot2.children[i].classList.contains("canAttack")) {
              break;
            } 
            if ((i == oldNumOfChild - 1) && (gameIsWon == false)) {
              jobsdoneSnd.play();
            }
          }
        }
        if(currentAttackersElement.classList.contains('player-cardinplay')) {
          if(currentAttackerAttack >= 5) {
            bigHitSnd.play();
          } else {
            attackSnd.play();
          }
        } 
        currentAttacker = null;
    } 
  });
});
}

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
              if((collision == true) && (playerCardSlot2.childElementCount != 7)) {
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
startGame();
placeCard();
enableDrag();

// Disable and Enable Screen Shakes
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
