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
    noAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 0)) {
    noAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 1)){
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 1)) {
    oneAlliedCard();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 2)){
    var maxAttack = findMaxPlayerAttack()
    // attacks hero if the hero is on 5 hp or lower
    if(document.getElementById('playerhero').children[1].innerText <= 5) {
      var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - opponentAttack;
      showDamageLabel(opponentAttack);
    }
    // otherwise attacks with the highest attack card on the board
    else {
      var opponentAttack = opponentCards[0].children[0].innerText;
      var opponentHealth = opponentCards[0].children[1].innerText;
      var alliedAttack = maxAttack.children[0].innerText;
      var alliedHealth = maxAttack.children[1].innerText;
      opponentCards[0].children[1].innerText = opponentHealth - alliedAttack;
      maxAttack.children[1].innerText = alliedHealth - opponentAttack;
      setTimeout(function() {
        if(opponentCards[0].children[1].innerHTML <= 0) { 
          opponentCards[0].remove();
        }
        if(maxAttack.children[1].innerHTML <= 0) {
          maxAttack.remove();
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 2)) {
    // twoAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 3)) {
    // threeAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 4)) {
    // fourAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 5)) {
    // fiveAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 6)) {
    // sixAlliedCards();
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 7)) {
    // sevenAlliedCards();
  }
  
  // checks if the player has lost
  const newHeroHealth = document.getElementById('playerhero').children[1].innerText;
  if(newHeroHealth < currentHeroHealth) {
    snd.play();
    checkForLoss()
  }
}

function findMaxOpponentAttack() {
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

function findMaxOpponentHealth() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('player-cardinplay')
  const numOfAlliedCards = playerCardSlot.childElementCount;
  let attackValues = []
  let biggestValue = 0
  for(let i=0; i<opponentCards.length; i++) {
    attackValues.push(opponentCards[i].children[1].innerText);
  }
  for(let i=0; i<attackValues.length; i++) {
    if(opponentCards[i].children[0].innerText > biggestValue) {
      biggestValue = opponentCards[i].children[1].innerText;
    }
  }
  for(let i=0; i<opponentCards.length; i++) {
    if(opponentCards[i].children[1].innerText == biggestValue) {
      return opponentCards[i]
    }
  }
}

function findMaxPlayerAttack() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  const numOfAlliedCards = playerCardSlot.childElementCount;
  let attackValues = []
  let biggestValue = 0
  for(let i=0; i<alliedCards.length; i++) {
    attackValues.push(alliedCards[i].children[0].innerText);
  }
  for(let i=0; i<attackValues.length; i++) {
    if(alliedCards[i].children[0].innerText > biggestValue) {
      biggestValue = alliedCards[i].children[0].innerText;
    }
  }
  for(let i=0; i<alliedCards.length; i++) {
    if(alliedCards[i].children[0].innerText == biggestValue) {
      return alliedCards[i]
    }
  }
}

function findMaxPlayerHealth() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  const numOfAlliedCards = playerCardSlot.childElementCount;
  let healthValues = []
  let biggestValue = 0
  for(let i=0; i<alliedCards.length; i++) {
    healthValues.push(alliedCards[i].children[1].innerText);
  }
  for(let i=0; i<healthValues.length; i++) {
    if(alliedCards[i].children[0].innerText > biggestValue) {
      biggestValue = alliedCards[i].children[1].innerText;
    }
  }
  for(let i=0; i<alliedCards.length; i++) {
    if(alliedCards[i].children[1].innerText == biggestValue) {
      return alliedCards[i]
    }
  }
}

function checkForLoss() {
  if (document.getElementById('playerhero').children[1].innerText <= 0) {
    playerHero.style.display = "none";
  }
  if (window.getComputedStyle(playerHero).display === "none") {
    setTimeout(function() {
      alert("You've Lost!")
      location.reload();
    },1000);
  }
}

function showDamageLabel(currentAttackerAttack) {
  document.querySelector("#playerdamagevalue").innerText = "-" + currentAttackerAttack;
  document.querySelector("#playerdamagecontainer").style.visibility = "visible";
  document.getElementById('playerdamagecontainer').style.opacity="1";
  document.getElementById('playerdamagecontainer').style.transition="none";
  document.querySelector("#playerdamagelabel").classList.add("openMenuAnim");
  document.querySelector("#playerdamagevalue").classList.add("openMenuAnim");
  document.querySelector("#playerdamagelabel").classList.remove("fadeOutAnim");
  document.querySelector("#playerdamagevalue").classList.remove("fadeOutAnim");
  setTimeout(function() {
    document.querySelector("#playerdamagelabel").classList.add("fadeOutAnim");
    document.querySelector("#playerdamagevalue").classList.add("fadeOutAnim");
    document.querySelector("#playerdamagelabel").classList.remove("openMenuAnim");
    document.querySelector("#playerdamagevalue").classList.remove("openMenuAnim");
    setTimeout(function() {
      document.getElementById('playerdamagecontainer').style.visibility="hidden";
      document.getElementById('playerdamagecontainer').style.opacity="0";
    },1000);
  },2000);
}


// AI RELATED
function noAlliedCards() {
  let sumOfAttack = 0;
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  var heroHealth = document.getElementById('playerhero').children[1].innerText;
  for(let i = 0; i < numOfOpponentCards; i++) {
    sumOfAttack += parseInt(opponentCards[i].children[0].innerText);
  }
  document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
  showDamageLabel(sumOfAttack);
}

function oneAlliedCard() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  var maxAttack = findMaxOpponentAttack()
  // attacks hero if the hero is on 12 hp or lower
  // starts at 10 increments by 2 every time +1 opponent card
  let healthModifier = 10;
  if (numOfOpponentCards == 2) {
    healthModifier += 2;
  }
  else if (numOfOpponentCards == 3) {
    healthModifier += 4;
  }
  else if (numOfOpponentCards == 4) {
    healthModifier += 6;
  }
  else if (numOfOpponentCards == 6) {
    healthModifier += 8;
  }
  else if (numOfOpponentCards == 7) {
    healthModifier += 10;
  }
  if(document.getElementById('playerhero').children[1].innerText <= healthModifier) {
    for(let i = 0; i < numOfOpponentCards; i++) {
      var opponentAttack = parseInt(opponentCards[i].children[0].innerText);
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      document.getElementById('playerhero').children[1].innerText = heroHealth - opponentAttack;
      showDamageLabel(opponentAttack);
    }
  }
  // otherwise attacks the highest attack card on the board and attacks the hero with the other
  else {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var opponentAttack = parseInt(maxAttack.children[0].innerText);
    var opponentHealth = maxAttack.children[1].innerText;
    var alliedAttack = alliedCards[0].children[0].innerText;
    var alliedHealth = alliedCards[0].children[1].innerText;
    maxAttack.children[1].innerText = opponentHealth - alliedAttack;
    alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
    var totalAttack = 0;
    for(let i = 0; i < numOfOpponentCards; i++) {
      totalAttack += parseInt(opponentCards[i].children[0].innerText);
    }
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    totalAttack -= opponentAttack;
    document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    if (numOfOpponentCards >= 2) {
      showDamageLabel(totalAttack);
    }
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

function twoAlliedCards() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const numOfAlliedCards = playerCardSlot.childElementCount;
  var maxAttack = findMaxOpponentAttack()
  var maxHealth = findMaxPlayerHealth()

  let healthModifier = 5;
  if (numOfOpponentCards == 2) {
    healthModifier += 2;
  }
  else if (numOfOpponentCards == 3) {
    healthModifier += 4;
  }
  else if (numOfOpponentCards == 4) {
    healthModifier += 6;
  }
  else if (numOfOpponentCards == 6) {
    healthModifier += 8;
  }
  else if (numOfOpponentCards == 7) {
    healthModifier += 10;
  }
  if(document.getElementById('playerhero').children[1].innerText <= healthModifier) {
    var opponentAttack = parseInt(opponentCards[0].children[0].innerText);
    var opponentAttack1 = parseInt(opponentCards[1].children[0].innerText);
    var totalAttack = opponentAttack + opponentAttack1;
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    document.getElementById('playerhero').children[1].innerText = heroHealth - totalAttack;
    showDamageLabel(totalAttack);
  }
  // otherwise attacks with the highest attack card on the board and attacks the player hero with the other
  else {
    var opponentAttack = maxAttack.children[0].innerText;
    var opponentHealth = maxAttack.children[1].innerText;
    var alliedAttack = maxHealth.children[0].innerText;
    var alliedHealth = maxHealth.children[1].innerText;
    var opponentAttack1 = opponentCards[0].children[0].innerText + opponentCards[1].children[0].innerText - maxAttack.children[0].innerText;
    var opponentHealth1 = opponentCards[0].children[1].innerText + opponentCards[1].children[1].innerText - maxAttack.children[1].innerText;
    var alliedAttack1 = alliedCards[0].children[0].innerText + alliedCards[1].children[0].innerText - maxHealth.children[0].innerText;
    var alliedHealth1 = alliedCards[0].children[1].innerText + alliedCards[1].children[1].innerText - maxHealth.children[1].innerText;
    maxAttack.children[1].innerText = opponentHealth - alliedAttack;
    maxHealth.children[1].innerText = alliedHealth - opponentAttack;
    setTimeout(function() {
      if(maxHealth.children[1].innerHTML <= 0) { 
        maxHealth.remove();
      }
      if(maxAttack.children[1].innerHTML <= 0) {
        maxAttack.remove();
      }
    },250);
  }
}