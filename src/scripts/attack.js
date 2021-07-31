/* gives all current cards on the board the ability to attack by giving the card
class 'canAttack', when attacking the card is checked to see if the card has
this class.*/
function attack() { 
    document.getElementById("playerheropower").classList.add("canAttack");
    var numOfChild = playerCardSlot2.childElementCount;
    for(let i=0; i<numOfChild; i++) {
      document.getElementsByClassName("player-cardinplay")[i].style.boxShadow = "0px 2px 15px 12px #0FCC00"; 
      document.getElementsByClassName("player-cardinplay")[i].classList.add("canAttack");
    }
  // attacking algorithm
  document.querySelectorAll('.cardinplay').forEach(function(e){
    e.addEventListener('mousedown', function(e) {
      if(currentAttacker == null) {
        if((this.classList.contains('player-cardinplay')) && (this.classList.contains('canAttack')) || (this.id == "playerheropower") && (this.classList.contains('canAttack'))) {
          playerCardSlot2.style.zIndex = "1"
          computerCardSlot.style.zIndex = "2"
          currentAttacker = this.id
          var xOrigin = e.clientX;
          var yOrigin = e.clientY;
          svg.style.display = "block";
          document.getElementById("innercursor").style.visibility = "visible";
          document.getElementById("outercursor").style.visibility = "visible";
          document.getElementById("arrowcursor").style.visibility = "visible";
          body.style.cursor = "none";
      body.addEventListener('mousemove', e2 => {
        var xDest = e2.clientX;
        var yDest = e2.clientY;
        var angleDeg = Math.atan2(yDest - yOrigin, xDest - xOrigin) * 180 / Math.PI;
        var deg = angleDeg + 90;
        document.getElementById("arrowcursor").style.transform = 'rotate('+deg+'deg) translate(-50%,-110%)';
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
          if (currentAttacker == "playerheropower") {
            mana -= 2;
            manaElement.innerHTML = mana + "/" + manaCapacity;
            checkForRequiredMana();
            updateManaGUI();
            setTimeout(function() {
              currentAttackerHealth -= targetAttack;
              targetHealth -= currentAttackerAttack;
              currentAttackerElement.children[1].children[0].innerHTML = currentAttackerHealth;
              targetElement.children[1].children[0].innerHTML = targetHealth;
              if (targetElement.id != "opposinghero") {
                currentAttackerElement.children[1].children[0].style.color = "#f20301";
              }
              targetElement.children[1].children[0].style.color = "#f20301";
              if (targetHealth <= 0) {
                setTimeout(function() {
                  if (targetElement.id == "opposinghero") {
                    gameWon();
                  }
                  targetElement.remove();
                },200);
              }
          },1000);
          } else {
            if (currentAttackerElement.classList.contains("hasDivineShield")) {
              currentAttackerElement.classList.remove("hasDivineShield");
              currentAttackerElement.children[2].classList.add("divineShieldBreak");
              setTimeout(function() {
                currentAttackerElement.children[2].style.visibility = "hidden";
              },400);
            } else {
              currentAttackerHealth -= targetAttack;
              if (targetElement.id != "opposinghero") {
                currentAttackerElement.children[1].children[0].style.color = "#f20301";
              }
            }
            if (targetElement.classList.contains("hasDivineShield")) {
              targetElement.classList.remove("hasDivineShield");
              computerCardSlot2.lastChild.children[2].style.visibility = "hidden";
            } else {
              targetHealth -= currentAttackerAttack;
              targetElement.children[1].children[0].style.color = "#f20301";
            }
            currentAttackerElement.children[1].children[0].innerHTML = currentAttackerHealth;
            targetElement.children[1].children[0].innerHTML = targetHealth;
          }
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
          if (currentAttacker == "playerheropower") {
            document.getElementById("playerheropower").classList.remove("canAttack");
          }
          setTimeout(function() {
            if(currentAttackerHealth <= 0) {
              if (document.querySelector('.playerHeroHealth').innerText <= 0) {
                alert("You've Lost!")
                location.reload();
              }
              if (currentAttackerElement.classList.contains("hasTaunt")) {
                tauntExists = false;
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
                }
                document.getElementById('block').style.opacity = "0";
                document.getElementById('block').style.visibility = "visible";
                setTimeout(function() {
                  document.getElementById('fireworkCanvas').style.display = "block";
                  document.getElementById('fireworkCanvas').classList.add("fadeInAnim");
                },3000);
                gameWon();
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
          document.getElementById("innercursor").style.visibility = "hidden";
          document.getElementById("outercursor").style.visibility = "hidden";
          document.getElementById("arrowcursor").style.visibility = "hidden";
          body.style.cursor = "url(src/cursor/cursor.png) 10 2, auto";
          currentAttackerElement.classList.remove("canAttack");
          if ((hand.childElementCount == 0) || (mana == 0)) {
            for(let i=0; i<playerCardSlot2.childElementCount; i++) {
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
          } else {
            heropowerSnd.play();
          }
          currentAttacker = null;
      } 
    });
  });
  return true
}

function gameWon() {
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
      myPacks++;
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
}