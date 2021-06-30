const computerCardSlot = document.querySelector('.board--opponent')
const playerCardSlot = document.querySelector('.board--player')
const playerHero = document.getElementById('playerhero')
const cpuHero = document.getElementById('opposinghero')
var snd = new Audio("/../../src/sounds/attack.mp3");
// attacks differently according to how many cards are currently in play
function AI() {
  const opponentCards = document.querySelectorAll('.computer-cardinplay')
  console.log(opponentCards)
  const numOfOpponentCards = computerCardSlot.childElementCount;
  const alliedCards = document.querySelectorAll('.player-cardinplay')
  console.log(alliedCards)
  const numOfAlliedCards = playerCardSlot.childElementCount;
  if((numOfOpponentCards == 1) && (numOfAlliedCards == 0)){
    var opponentAttack = opponentCards[0].children[0].innerText;
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - opponentAttack;
      snd.play();
    },750);
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack;
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
      snd.play();
    },750);
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack;
    setTimeout(function(){
    document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
    snd.play();
    },750);
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
      snd.play();
      },750);
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 0)) {
    var heroHealth = document.getElementById('playerhero').children[1].innerText;
    var firstAttack = parseInt(opponentCards[0].children[0].innerText);
    var secondAttack = parseInt(opponentCards[1].children[0].innerText);
    var thirdAttack = parseInt(opponentCards[2].children[0].innerText);
    var fourthAttack = parseInt(opponentCards[3].children[0].innerText);
    var fifthAttack = parseInt(opponentCards[4].children[0].innerText);
    var sumOfAttack = firstAttack + secondAttack + thirdAttack + fourthAttack + fifthAttack;
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
      snd.play();
      },750);
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
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
      snd.play();
      },750);
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
    setTimeout(function(){
      document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
      snd.play();
      },750);
  }
  else if((numOfOpponentCards == 1) && (numOfAlliedCards == 1)){
    // attacks hero if the hero is on 10 hp or lower
    if(heroHealth <= 30) {
      var opponentAttack = opponentCards[0].children[0].innerText;
      var heroHealth = document.getElementById('playerhero').children[1].innerText;
      setTimeout(function(){
        document.getElementById('playerhero').children[1].innerText = heroHealth - sumOfAttack;
        snd.play();
        },750);
    }
    // otherwise attacks the one card on the board.
    else {
      var opponentAttack = opponentCards[0].children[0].innerText;
      var opponentHealth = opponentCards[0].children[1].innerText;
      var alliedAttack = alliedCards[0].children[0].innerText;
      var alliedHealth = alliedCards[0].children[1].innerText;
      setTimeout(function(){
        opponentCards[0].children[1].innerText = opponentHealth - alliedAttack;
        alliedCards[0].children[1].innerText = alliedHealth - opponentAttack;
        snd.play();
      },750);
      setTimeout(function() {
        if(alliedCards[0].children[1].innerHTML <= 0) { //NOT WORKING
          console.log(alliedCards[0])
          alliedCards[0].style.display = "none";
        }
        if(opponentCards[0].children[1].innerHTML <= 0) {
          opponentCards[0].style.display = "none";
        }
      },250);
    }
  }
  else if((numOfOpponentCards == 2) && (numOfAlliedCards == 1)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 3) && (numOfAlliedCards == 1)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 4) && (numOfAlliedCards == 1)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 5) && (numOfAlliedCards == 1)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 6) && (numOfAlliedCards == 1)) {
    findMaxAttack()
  }
  else if((numOfOpponentCards == 7) && (numOfAlliedCards == 1)) {
    findMaxAttack()
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
  checkForLoss()
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
  console.log(biggestValue)
}

function checkForLoss() {
  if (document.getElementById('playerhero').children[1].innerText <= 0) {
    alert("You've Lost!")
    location.reload();
  }
}
