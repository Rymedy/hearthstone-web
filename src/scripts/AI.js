const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot = document.querySelector('.board--player')
const playerHero = document.getElementById('playerhero')
const cpuHero = document.getElementById('opposinghero')
var snd = new Audio("/../../src/sounds/attack.mp3");
// attacks differently according to how many cards are currently in play
function AI() {
  const currentHeroHealth = document.getElementById('playerhero').children[1].innerText;
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  const numOfAlliedCards = playerCardSlot.childElementCount;
  if((numOfOpponentCards == 1) && (numOfAlliedCards == 0)){
    var opponentAttack = opponentCards[0].children[0].innerText;
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    document.getElementById('playerhero').children[1].innerText = heroHealth - opponentAttack;
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack + fourthAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    var fifthAttack = parseInt(opponentCards[4].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack + fourthAttack + fifthAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    var fifthAttack = parseInt(opponentCards[4].children[0].innerText);
    var sixthAttack = parseInt(opponentCards[5].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack + fourthAttack + fifthAttack + sixthAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    var fifthAttack = parseInt(opponentCards[4].children[0].innerText);
    var sixthAttack = parseInt(opponentCards[5].children[0].innerText);
    var seventhAttack = parseInt(opponentCards[6].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack + fourthAttack + fifthAttack + sixthAttack + seventhAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 1)){
    // attacks hero if the hero is on 10 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 10) {
      var opponentAttack = opponentCards[0].children[0].innerText;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - opponentAttack;
    }
    // otherwise attacks the one card on the board.
    else {
      var opponentAttack = opponentCards[0].children[0].innerText;
      var opponentHealth = opponentCards[0].children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      opponentCards[0].children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(opponentCards[0].children[1].innerHTML <= 0) {
          opponentCards[0].remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 12 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 12) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 14 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 14) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[2].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1 + opponentAttack2;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[2].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 + opponentAttack3 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 16 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 16) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[3].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1 + opponentAttack2 + opponentAttack3;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[3].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 18 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 18) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[4].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack5 = parseInt(opponentCards[4].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 + opponentAttack5 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 20 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 20) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[4].children[0].innerText);
      var opponentAttack5 = parseInt(opponentCards[5].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 + opponentAttack5;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack5 = parseInt(opponentCards[4].children[0].innerText);
      var opponentAttack6 = parseInt(opponentCards[5].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 + opponentAttack5 + opponentAttack6 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 1)) {
    var maxAttack = findMaxAttack()
    // attacks hero if the hero is on 20 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 20) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[4].children[0].innerText);
      var opponentAttack5 = parseInt(opponentCards[5].children[0].innerText);
      var opponentAttack6 = parseInt(opponentCards[6].children[0].innerText);
      var totalAttack = opponentAttack + opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 + opponentAttack5 + opponentAttack6;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    }
    // otherwise attacks the highest attack card on the board and attacks the hero with the other
    else {
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      var opponentAttack = parseInt(maxAttack.children[0].innerText);
      var opponentHealth = maxAttack.children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      var opponentAttack1 = parseInt(opponentCards[0].children[0].innerText);
      var opponentAttack2 = parseInt(opponentCards[1].children[0].innerText);
      var opponentAttack3 = parseInt(opponentCards[2].children[0].innerText);
      var opponentAttack4 = parseInt(opponentCards[3].children[0].innerText);
      var opponentAttack5 = parseInt(opponentCards[4].children[0].innerText);
      var opponentAttack6 = parseInt(opponentCards[5].children[0].innerText);
      var opponentAttack7 = parseInt(opponentCards[6].children[0].innerText);
      var totalAttack = opponentAttack1 + opponentAttack2 + opponentAttack3 + opponentAttack4 + opponentAttack5 + opponentAttack6 + opponentAttack7 - opponentAttack;
      maxAttack.children[1].innerText = opponentHealth - alliedAttack;
      alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
      document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { 
          alliedCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 2)){
    console.log(opponentCards[0].children[0].innerText)
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 2)) {
    findMaxAttack()
  }
  const newHeroHealth = document.getElementById('playerhero').children[1].innerText;
  if(newHeroHealth < currentHeroHealth) {
    snd.play();
    checkForLoss()
  }
}

function findMaxAttack() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('player-cardinplay')
  const numOfAlliedCards = playerCardSlot.childElementCount;
  let attackValues = []
  let biggestValue = 0
  for(let i=0; i<opponentCards.length; i++) {
    attackValues.push(opponentCards[i].children[0].innerText);
  }
  for(let i=0; i<attackValues.length; i++) {
    if(opponentCards[i].children[0].innerText > biggestValue) {
      biggestValue = opponentCards[i].children[0].innerText;
    }
  }
  for(let i=0; i<opponentCards.length; i++) {
    if(opponentCards[i].children[0].innerText == biggestValue) {
      return opponentCards[i]
    }
  }
}

function checkForLoss() {
  if (document.getElementById('playerhero').children[1].innerText <= 0) {
    playerHero.style.display = "none";
  }
  if (window.getComputedStyle(playerHero).display === "none") {
    alert("You've Lost!")
    location.reload();
  }
}
