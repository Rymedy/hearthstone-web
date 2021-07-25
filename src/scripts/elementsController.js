var openmenuSnd = new Audio("src/sounds/openmenu.mp3");
var purchaseSnd = new Audio("src/sounds/purchase.mp3");
var menuhoverSnd = new Audio("src/sounds/menuselect.mp3");
var shophoverSnd = new Audio("src/sounds/shophover.mp3");
var shoponclickSnd = new Audio("src/sounds/shoponclick.mp3")
var startTutorialSnd = new Audio("src/voiceovers/innkeeper_starttutorial.mp3");
var battlebeginSnd = new Audio("src/voiceovers/innkeeper_tutorialbattle.mp3");
var jainathreatSnd = new Audio("src/voiceovers/jaina_tutorialbattle.mp3");
var hasPlayedBattleBeginSnd = new Boolean(false);
var isInGame = new Boolean(false);
// Initial volume of 0.20
// Make sure it's a multiple of 0.05
var vol = 0.5;
var interval = 175; // 200ms interval
// soundtrack's to be randomly selected in game
var lichkingOST = new Audio("src/ost/knights_of_the_frozen_throne.mp3");
var items = [
    "src/ost/mulligan.mp3", 
    "src/ost/bad_reputation.mp3", 
    "src/ost/better_hand.mp3", 
    "src/ost/dont_let_your_guard_down.mp3",
    "src/ost/duel.mp3",
    "src/ost/the_forge.mp3"
    ]
// randomly selects an element from the array 'items'
var item = items[Math.floor(Math.random()*items.length)];
// converts the string into an audio element
var song = new Audio(item);
/* boolean to check if the audio is already playing to ensure multiple audio 
files do not play at the same time when the end turn button is clicked */
var audioIsPlayed = new Boolean(false)
// plays a random song and sets the volume to 70% from the array defined above
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
  song.volume = e.currentTarget.value / 100;
})
document.addEventListener("keydown", function(){
    var x=event.keyCode || event.which;
    if(x==27)
    {
    var game = document.getElementById("game")
    var gamemenu = document.getElementById("gamemenu")
    var gamemenuContent = document.getElementById("gamemenuContent");
    if (gamemenuContent.style.display === "block")
    {
        // hide options menu
        if (document.getElementById('optionsmenuContent').style.display === "block") {
            document.getElementById('optionsmenu').style.display = "none";
            document.getElementById('optionsmenuContent').style.display = "none";
            document.getElementById('optionsmenuContent').classList.remove('openMenuAnim');
        } else {
        // show game
        document.getElementById("gamemenuContent").classList.remove('openMenuAnim');
        document.getElementById("gamemenu").style.display = "none";
        document.getElementById("gamemenuContent").style.display = "none";
        }
    } else if (document.getElementById("shopmenu").style.display == "block") {
        document.getElementById("shopmenu").style.display = "none";
        document.getElementById("shopmenuContent").style.display = "none";
        document.getElementById("shopmenuContent").classList.remove("openMenuAnim");
        document.getElementById("mainmenu").style.filter = "none";
    } else {
        // show game menu
        document.getElementById("gamemenu").style.display = "block";
        document.getElementById("gamemenuContent").style.display = "block";
        document.getElementById("gamemenuContent").classList.add('openMenuAnim');
        if (isInGame == true) {
            concedebtn.disabled = false;
        } else if (isInGame == false) {
            concedebtn.disabled = true;
        }
        openmenuSnd.play();
    }
    }
})

// On button hover play sound
var concedebtn = document.querySelector('#concedebutton');
var optionsbtn = document.querySelector('#optionsbutton');
var quitbtn = document.querySelector('#quitbutton');
var resumebtn = document.querySelector('#resumebutton');
var miscellaneousbtn = document.querySelector('#miscellaneousbutton');
var confirmbtn = document.querySelector('#confirm');
var endturnbtn = document.getElementById("endturn");

var playbtn = document.querySelector('#playbutton');
var tutorialbtn = document.querySelector('#tutorialbutton');
var localmultiplayerbtn = document.querySelector('#localmultiplayerbutton');
var openpacksbtn = document.querySelector('#openpacksbutton');
var shopbtn = document.querySelector('#shopbutton');
var buybtn = document.querySelector('#buybutton');

var starttutorialbtn = document.querySelector('#starttutorialbutton');
var backfrompackbtn = document.querySelector('#backfrompackbtn');
var donepackbtn = document.querySelector('#donepackbutton');

concedebtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
optionsbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
quitbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
resumebtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
miscellaneousbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
playbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
tutorialbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
localmultiplayerbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
openpacksbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
starttutorialbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
backfrompackbtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})
shopbtn.addEventListener('mouseover', function(){
    shophoverSnd.play();
})
buybtn.addEventListener('mouseover', function(){
    menuhoverSnd.play();
})


concedebtn.onclick = function () {
    openmenuSnd.play()
    alert("You've Lost!")
    location.reload();
};

optionsbtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById('optionsmenu').style.display = "block";
    document.getElementById('optionsmenuContent').style.display = "block";
    document.getElementById('optionsmenuContent').classList.add('openMenuAnim');
};

quitbtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById('interactive');
    document.getElementById('contents').style.visibility="hidden";
    document.getElementById('contents').style.opacity="0";
    document.getElementById('contents').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
    // may not work as can only close tabs with scripts that were opened with
    window.close();
};

resumebtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById("gamemenuContent").classList.remove('openMenuAnim');
    document.getElementById("gamemenu").style.display = "none";
    document.getElementById("gamemenuContent").style.display = "none";
};

confirmbtn.onclick = function () {
    if (isTutorial == true) {
        document.querySelector("#block").style.zIndex = "9";
        document.querySelector('#triangle').style.visibility = "hidden";
        document.querySelector('#triangle').style.opacity="0";
        document.querySelector('#triangle').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('#hintbackbackground').style.visibility = "hidden";
        document.querySelector('#hintbackbackground').style.opacity="0";
        document.querySelector('#hintbackbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('#hintbackground').style.visibility = "hidden";
        document.querySelector('#hintbackground').style.opacity="0";
        document.querySelector('#hintbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('#hint').style.visibility = "hidden";
        document.querySelector('#hint').style.opacity="0";
        document.querySelector('#hint').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector(".opponenthero").style.zIndex = "5";
        document.querySelector(".playerHeroHealth").innerText = "30";
        document.querySelector(".opposingHeroHealth").innerText = "10";
        document.querySelector('#confirm').classList.remove("packHoverAnim");
        document.querySelector("#confirm").classList.add("openPackAnim");
        endturnbtn.disabled = true;
        setTimeout(function() {
            startTutorialSnd.play();
            setTimeout(function() {
                document.querySelector(".playerhero").style.visibility = "visible";
                document.querySelector('.playerhero').classList.add("tutorialHeroAnim");
                document.getElementById("game").classList.add("shakeScreenAnim");
                document.querySelector('#confirm').style.visibility = "hidden";
            },250);
            setTimeout(function() {
                document.querySelector('#block').style.opacity="0";
                document.querySelector('#block').style.transition="opacity 2s linear";
                setTimeout(function() {
                    document.querySelector('.playerhero').style.zIndex = "9";
                    setTimeout(function() {
                        document.querySelector(".opponenthero").style.visibility = "visible";
                        document.querySelector(".opponenthero").classList.add("tutorialHoggerAnim");
                        setTimeout(function() {
                            setTimeout(function(){
                                document.querySelector("#computerbubble").innerHTML = "...";
                                document.querySelector("#computerbubble").style.visibility = "visible";
                                document.querySelector('#computerbubble').classList.add("openMenuAnim");
                            },1000);
                            document.querySelector(".opponenthero").style.zIndex = "11";
                            document.querySelector(".playerhero").style.zIndex = "9";
                            setTimeout(function(){
                                document.querySelector('#computerbubble').classList.add("easeOutAnim");
                                document.querySelector('#computerbubble').classList.remove("openMenuAnim");
                                setTimeout(function(){
                                    document.querySelector("#computerbubble").style.visibility = "hidden";
                                    document.querySelector('#computerbubble').classList.remove("easeOutAnim");
                                    setTimeout(function(){
                                        document.querySelector("#tutorialmenu").style.display = "block";
                                        document.querySelector("#tutorialmenuContent").style.display = "block";
                                        document.querySelector("#tutorialmenuContent").classList.add("openMenuAnim");
                                    },1000);
                                },250);
                            },3500);
                            document.querySelector('.playerHeroHealth').style.visibility = "visible";
                            document.querySelector('.playerHeroHealth').style.opacity="1";
                            document.querySelector('.playerHeroHealth').style.transition="visibility 0.5s, opacity 0.5s linear";
                            document.querySelector('.opposingHeroHealth').style.visibility = "visible";
                            document.querySelector('.opposingHeroHealth').style.opacity="1";
                            document.querySelector('.opposingHeroHealth').style.transition="visibility 0.5s, opacity 0.5s linear";
                        },1000);
                    },925);
                },2000);
            },8000);
        },1000)
    } else {
        document.querySelector('#block').style.visibility = "hidden";
        document.querySelector('#block').style.opacity="0";
        document.querySelector('#block').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('#confirm').style.visibility = "hidden";
        document.querySelector('#confirm').style.opacity="0";
        document.querySelector('#confirm').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('.playerHeroHealth').style.visibility = "visible";
        document.querySelector('.playerHeroHealth').style.opacity="1";
        document.querySelector('.playerHeroHealth').style.transition="visibility 0.5s, opacity 0.5s linear";
        document.querySelector('.opposingHeroHealth').style.visibility = "visible";
        document.querySelector('.opposingHeroHealth').style.opacity="1";
        document.querySelector('.opposingHeroHealth').style.transition="visibility 0.5s, opacity 0.5s linear";
        document.querySelector(".playerhero").style.zIndex = "5";
        document.querySelector(".opponenthero").style.zIndex = "5";
        if(audioIsPlayed == false) {
            lichkingOST.play();
            song.volume = 0.7;
            audioIsPlayed = true;
        }
    }
};

miscellaneousbtn.onclick = function () {
    openmenuSnd.play();
    window.open(
        'https://playhearthstone.com/en-gb',
        '_blank' // <- This is what makes it open in a new window.
      );
};

playbtn.onclick = function () {
    isTutorial = false;
    isInGame = true;
    document.getElementById("block").style.visibility = "visible";
    // fade out the volume of the mainmenuOST
    var fadeout = setInterval(
        function() {
          // Reduce volume by 0.05 as long as it is above 0
          // This works as long as you start with a multiple of 0.05!
          if (vol > 0.05) {
            vol -= 0.05;
            mainmenuOST.volume = vol;
          }
          else {
            // Stop the setInterval when 0 is reached
            clearInterval(fadeout);
          }
        }, interval);
    openmenuSnd.play();
    setTimeout(function() {
        mainmenuOST.pause();
    },1750);
    crowdSnd.pause();
    document.getElementById('transitionblock').style.visibility="visible";
    document.getElementById('transitionblock').classList.add("fadeInAnim");
    setTimeout(function() {
        document.getElementById('transitionblock').classList.add("fadeOutAnim");
        setTimeout(function() {
            document.getElementById('transitionblock').style.visibility="hidden";
        },1000);
    },1000);
    document.getElementById('mainmenu').style.visibility="hidden";
    setTimeout(function() {
    document.getElementById('contents').style.visibility="visible";
    document.getElementById("playerlabel").style.visibility = "visible";
    document.getElementById("playerclasslabel").style.visibility = "visible";
    document.getElementById("opponentlabel").style.visibility = "visible";
    document.getElementById("vs").style.visibility = "visible";
    let onloadSnd = new Audio("src/sounds/ongameload.mp3");
    onloadSnd.play();
    document.querySelector('.playerhero').classList.add("onLoadPlayerAnim");
    document.querySelector('.opponenthero').classList.add("onLoadComputerAnim");
    setTimeout(function(){
    document.querySelector('#playerlabel').style.visibility = "hidden";
    document.querySelector('#playerlabel').style.opacity="0";
    document.querySelector('#playerlabel').style.transition="visibility 0s 0.1s, opacity 0.1s linear";
    document.querySelector('#playerclasslabel').style.visibility = "hidden";
    document.querySelector('#playerclasslabel').style.opacity="0";
    document.querySelector('#playerclasslabel').style.transition="visibility 0s 0.1s, opacity 0.1s linear";
    document.querySelector('#opponentlabel').style.visibility = "hidden";
    document.querySelector('#opponentlabel').style.opacity="0";
    document.querySelector('#opponentlabel').style.transition="visibility 0s 0.1s, opacity 0.1s linear";
     },5250);
    setTimeout(function(){
     document.querySelector('#vs').style.visibility = "hidden";
     document.querySelector('#vs').style.opacity="0";
     document.querySelector('#vs').style.transition="visibility 0s 0.2s, opacity 0.2s linear";
         setTimeout(function(){
             document.querySelector(".opponenthero").style.zIndex = "9";
             setTimeout(function(){
                 document.querySelector("#playerbubble").style.visibility = "visible";
                 document.querySelector('#playerbubble').classList.add("openMenuAnim");
             },250);
             setTimeout(function(){
                 document.querySelector('#playerbubble').classList.add("easeOutAnim");
                 document.querySelector('#playerbubble').classList.remove("openMenuAnim");
                 setTimeout(function(){
                     document.querySelector("#playerbubble").style.visibility = "hidden";
                 },250);
                 setTimeout(function(){
                     document.querySelector("#computerbubble").style.visibility = "visible";
                     document.querySelector('#computerbubble').classList.add("openMenuAnim");
                 },250);
                 document.querySelector(".opponenthero").style.zIndex = "11";
                 document.querySelector(".playerhero").style.zIndex = "9";
                 setTimeout(function(){
                     document.querySelector('#computerbubble').classList.add("easeOutAnim");
                     document.querySelector('#computerbubble').classList.remove("openMenuAnim");
                     setTimeout(function(){
                         document.querySelector("#computerbubble").style.visibility = "hidden";
                         document.querySelector('#computerbubble').classList.remove("easeOutAnim");
                     },250);
                     document.querySelector(".opponenthero").style.zIndex = "9";
                     document.querySelector('#confirm').style.display = "block";
                 },5500);
             },1500);
         },2000);
     },6000);
},1000);
};

function tutorial() {
    isTutorial = true;
    isInGame = true;
        // fade out the volume of the mainmenuOST
        var fadeout = setInterval(
            function() {
              // Reduce volume by 0.05 as long as it is above 0
              // This works as long as you start with a multiple of 0.05!
              if (vol > 0.05) {
                vol -= 0.05;
                mainmenuOST.volume = vol;
              }
              else {
                // Stop the setInterval when 0 is reached
                clearInterval(fadeout);
              }
            }, interval);
        setTimeout(function() {
            mainmenuOST.pause();
        },1750);
        crowdSnd.pause();
        document.querySelector(".playerhero").style.visibility = "hidden";
        document.querySelector(".opponenthero").style.visibility = "hidden";
        document.querySelector(".opponenthero").style.backgroundImage = "url(src/images/hogger.png)";
        document.querySelector('#endturn').style.zIndex = "10";
        document.querySelector(".playerhero").style.zIndex = "20";
        document.querySelector(".opponenthero").style.zIndex = "5";
        document.getElementById('transitionblock').style.visibility="visible";
        document.getElementById("block").style.visibility = "visible";
        document.querySelector('#endturn').style.zIndex = "9";
        document.querySelector('#confirm').style.display = "block";
        document.querySelector('#confirm').classList.add("packHoverAnim");
        document.querySelector('#confirm').innerText = "";
        document.querySelector('#confirm').style.backgroundColor = "transparent";
        document.querySelector('#confirm').style.border = "none";
        document.querySelector('#confirm').style.width = "11%";
        document.querySelector('#confirm').style.height = "25%";
        document.querySelector('#confirm').style.top = "34%";
        document.querySelector('#confirm').style.left = "44.7%";
        document.querySelector('#confirm').style.transform = "rotate(-15deg)";
        document.querySelector('#confirm').style.backgroundImage = "url(src/images/pack.png)";
        setTimeout(function() {
            document.getElementById('transitionblock').classList.add("fadeInAnim");
            document.getElementById('transitionblock').classList.add("fadeOutAnim");
            setTimeout(function() {
                document.getElementById('transitionblock').style.visibility="hidden";
                document.querySelector('#triangle').style.visibility = "visible";
                document.querySelector('#hintbackbackground').style.visibility = "visible";
                document.querySelector('#hintbackground').style.visibility = "visible";
                document.querySelector('#hint').style.visibility = "visible";
                document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                document.querySelector('#hintbackground').classList.add("openMenuAnim");
                document.querySelector('#hint').classList.add("openMenuAnim");
            },1000);
        },1000);
        document.getElementById('mainmenu').style.visibility="hidden";
        document.getElementById('contents').style.visibility="visible";
}


tutorialbtn.onclick = function () {
    openmenuSnd.play();
    tutorial();
};

localmultiplayerbtn.onclick = function () {
    openmenuSnd.play();
};

openpacksbtn.onclick = function () {
    openmenuSnd.play();
    // fade out the volume of the mainmenuOST
    var fadeout = setInterval(
        function() {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (vol > 0.05) {
            vol -= 0.05;
            mainmenuOST.volume = vol;
            }
            else {
            // Stop the setInterval when 0 is reached
            clearInterval(fadeout);
            }
        }, interval);
    setTimeout(function() {
        mainmenuOST.pause();
    },1750);
    crowdSnd.pause();
    var packElements = document.getElementsByClassName("pack");
    document.querySelector("#mainmenu").style.display = "none";
    document.querySelector("#openpacks").style.display = "block";
    document.querySelector("#pkcollisionbox").style.display = "block";
    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "block";
    }
    var myPacks = Number(localStorage.getItem('myPacks'));
    if (myPacks >= 1) {
        init();
    }
};

function shop() {
    shoponclickSnd.play();
    document.getElementById("shopmenu").style.display = "block";
    document.getElementById("shopmenuContent").style.display = "block";
    document.getElementById("shopmenuContent").classList.add("openMenuAnim");
    document.getElementById("mainmenu").style.filter = "blur(5px)";
}

shopbtn.onclick = function () {
    shop();
};

buybtn.onclick = function () {
    openmenuSnd.play();
    var myGold = Number(localStorage.getItem('myGold'));
    myGold -= 100;
    if (myGold >= 0) {
        setTimeout(function() {
            purchaseSnd.play();
        },150)
        createPack();
        var myPacks = Number(localStorage.getItem('myPacks'));
        myPacks++;
        localStorage.setItem('myGold', myGold.toString());
        localStorage.setItem('myPacks', myPacks.toString());
        document.getElementById("myGold").innerText = myGold + "🪙";
        document.getElementById("myPacks").innerText = myPacks;
    } else {
        myGold += 100;
    }
};

backfrompackbtn.onclick = function () {
    openmenuSnd.play();
    crowdSnd.play();
    var packElements = document.getElementsByClassName("pack");
    document.querySelector("#mainmenu").style.display = "block";
    document.querySelector("#openpacks").style.display = "none";
    document.querySelector("#pkcollisionbox").style.display = "none";
    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "none";
    }
};

starttutorialbtn.onclick = function () {
    openmenuSnd.play();
    document.querySelector('#triangle').classList.remove("triangleOpenMenuAnim");
    document.querySelector('#hintbackbackground').classList.remove("openMenuAnim");
    document.querySelector('#hintbackground').classList.remove("openMenuAnim");
    document.querySelector('#hint').classList.remove("openMenuAnim");
    document.querySelector(".opponenthero").style.zIndex = "2";
    document.getElementById("game").classList.remove("shakeScreenAnim");
        startTutorialSnd.addEventListener("ended", function(){
            if (hasPlayedBattleBeginSnd == false) {
                battlebeginSnd.play();
                hasPlayedBattleBeginSnd = true;
            }
        })
        
    if ((hasPlayedBattleBeginSnd == false) && (startTutorialSnd.paused)){
        battlebeginSnd.play();
    }
    document.querySelector(".playerhero").style.zIndex = "8";
    document.querySelector("#endturn").style.zIndex = "21";
    document.querySelector("#tutorialmenuContent").classList.add("straightEaseOutAnim");
    setTimeout(function() {
        battlebeginSnd.onended = function() {
                jainathreatSnd.play();
                document.querySelector("#playerbubble").innerHTML = "...";
                document.querySelector("#playerbubble").style.visibility = "visible";
                document.querySelector('#playerbubble').classList.add("openMenuAnim");
                setTimeout(function(){
                    document.querySelector('#playerbubble').classList.add("easeOutAnim");
                    document.querySelector('#playerbubble').classList.remove("openMenuAnim");
                    setTimeout(function(){
                        document.querySelector("#playerbubble").style.visibility = "hidden";
                        document.querySelector('#playerbubble').classList.remove("easeOutAnim");
                        setTimeout(function() {
                            // start tutorial
                            document.querySelector('#block').style.visibility = "hidden";
                            document.getElementById("gifhint").style.display = "block";
                            document.getElementById("texthint").style.display = "block";
                            endturnbtn.disabled = false;
                            setTimeout(function() {
                            document.querySelector('#triangle').style.visibility = "visible";
                            document.querySelector('#triangle').style.opacity="1";
                            document.querySelector('#triangle').style.transition="none";
                            document.querySelector('#triangle').style.top="82.75%";
                            document.querySelector('#triangle').style.left="56%";
                            document.querySelector('#hintbackbackground').style.visibility = "visible";
                            document.querySelector('#hintbackbackground').style.opacity="1";
                            document.querySelector('#hintbackbackground').style.transition="none";
                            document.querySelector('#hintbackbackground').style.top="78.8%";
                            document.querySelector('#hintbackbackground').style.left="58.5%";
                            document.querySelector('#hintbackground').style.visibility = "visible";
                            document.querySelector('#hintbackground').style.opacity="1";
                            document.querySelector('#hintbackground').style.transition="none";
                            document.querySelector('#hintbackground').style.top="79%";
                            document.querySelector('#hintbackground').style.left="58.7%";
                            document.querySelector('#hint').style.opacity="1";
                            document.querySelector('#hint').style.transition="none";
                            document.querySelector('#hint').style.visibility = "visible";
                            document.querySelector('#hint').style.opacity="1";
                            document.querySelector('#hint').style.transition="none";
                            document.querySelector('#hint').style.top="80%";
                            document.querySelector('#hint').style.left="59.25%";
                            document.querySelector('#hintlabel').style.left="10%";
                            document.querySelector('#hintlabel').style.top="17%";
                            document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                            document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                            document.querySelector('#hintbackground').classList.add("openMenuAnim");
                            document.querySelector('#hint').classList.add("openMenuAnim");
                            document.querySelector('#hintlabel').innerText = "If you run out of\nHealth, you lose.";
                            setTimeout(function() {
                                document.querySelector('#triangle').style.visibility = "hidden";
                                document.querySelector('#triangle').style.opacity="0";
                                document.querySelector('#triangle').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hintbackbackground').style.visibility = "hidden";
                                document.querySelector('#hintbackbackground').style.opacity="0";
                                document.querySelector('#hintbackbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hintbackground').style.visibility = "hidden";
                                document.querySelector('#hintbackground').style.opacity="0";
                                document.querySelector('#hintbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hint').style.visibility = "hidden";
                                document.querySelector('#hint').style.opacity="0";
                                document.querySelector('#hint').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#triangle').classList.remove("triangleOpenMenuAnim");
                                document.querySelector('#hintbackbackground').classList.remove("openMenuAnim");
                                document.querySelector('#hintbackground').classList.remove("openMenuAnim");
                                document.querySelector('#hint').classList.remove("openMenuAnim");
                                setTimeout(function() {
                                    setTimeout(function() {
                                        document.querySelector('#triangle').style.visibility = "visible";
                                        document.querySelector('#triangle').style.opacity="1";
                                        document.querySelector('#triangle').style.transition="none";
                                        document.querySelector('#triangle').style.top="24.75%";
                                        document.querySelector('#triangle').style.left="56%";
                                        document.querySelector('#hintbackbackground').style.visibility = "visible";
                                        document.querySelector('#hintbackbackground').style.opacity="1";
                                        document.querySelector('#hintbackbackground').style.transition="none";
                                        document.querySelector('#hintbackbackground').style.top="21.3%";
                                        document.querySelector('#hintbackbackground').style.left="58.5%";
                                        document.querySelector('#hintbackground').style.visibility = "visible";
                                        document.querySelector('#hintbackground').style.opacity="1";
                                        document.querySelector('#hintbackground').style.transition="none";
                                        document.querySelector('#hintbackground').style.top="21.5%";
                                        document.querySelector('#hintbackground').style.left="58.7%";
                                        document.querySelector('#hint').style.opacity="1";
                                        document.querySelector('#hint').style.transition="none";
                                        document.querySelector('#hint').style.visibility = "visible";
                                        document.querySelector('#hint').style.opacity="1";
                                        document.querySelector('#hint').style.transition="none";
                                        document.querySelector('#hint').style.top="22.5%";
                                        document.querySelector('#hint').style.left="59.25%";
                                        document.querySelector('#hintlabel').style.left="10%";
                                        document.querySelector('#hintlabel').style.top="17%";
                                        document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                                        document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                                        document.querySelector('#hintbackground').classList.add("openMenuAnim");
                                        document.querySelector('#hint').classList.add("openMenuAnim");
                                        document.querySelector('#hintlabel').style.width = "100%";
                                        document.querySelector('#hintlabel').style.left = "0";
                                        document.querySelector('#hintlabel').style.fontSize = "20px";
                                        document.querySelector('#hintlabel').innerText = "When Hogger has\nno Health, you win.";
                                        setTimeout(function() {
                                            document.querySelector('#triangle').style.visibility = "hidden";
                                            document.querySelector('#triangle').style.opacity="0";
                                            document.querySelector('#triangle').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hintbackbackground').style.visibility = "hidden";
                                            document.querySelector('#hintbackbackground').style.opacity="0";
                                            document.querySelector('#hintbackbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hintbackground').style.visibility = "hidden";
                                            document.querySelector('#hintbackground').style.opacity="0";
                                            document.querySelector('#hintbackground').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hint').style.visibility = "hidden";
                                            document.querySelector('#hint').style.opacity="0";
                                            document.querySelector('#hint').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
                                        },4000)
                                    },1000)
                                    },1000)
                                },4000)
                            },2000)
                        },1000)
                    },250);
                },1000);
                setTimeout(function() {
                    song.play();
            },1000)
        }
        document.querySelector("#tutorialmenuContent").style.display = "none";
        document.querySelector("#tutorialmenu").style.display = "none";
    },125);
};

donepackbtn.onclick = function () {
    document.getElementById('openpacks').classList.remove("openPackShakeScreenAnim");
    var packElements = document.getElementsByClassName("pack");
    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "none";
    }
    var packElements = document.getElementsByClassName("pack");
    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "block";
    }
    // if remaining packs still exist run this function again
    var myPacks = Number(localStorage.getItem('myPacks'));
    if (myPacks >= 1) {
        init();
    }
    donepackbtn.style.display = "none";
    document.getElementById("openpacks").style.filter = "none";
    document.getElementById("backfrompackbtn").disabled = false;
    document.getElementById("containerOpenPack").style.display = "none";
    elementsToRemove = document.querySelectorAll(".flip-card");
    for (let i = 0; i < 5; i++) {
        elementsToRemove[i].remove();
    }
}

const targetDiv = document.getElementById("fps");
const fpsbtn = document.getElementById('togglefps')
fpsbtn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
};

const preventCORSbtn = document.getElementById('preventCORS');
preventCORSbtn.onclick = function () {
    document.getElementById('preventCORS').classList.add("fadeOutAnim");
    setTimeout(function() {
        document.getElementById('preventCORS').style.visibility="hidden";
    },1000)
    mainmenuOST.play();
    mainmenuOST.volume = 0.7;
    setTimeout(function(){
        voiceover.play();
    },550);
    if (typeof crowdSnd.loop == 'boolean')
    {
        crowdSnd.loop = true;
    }
    else
    {
        crowdSnd.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    crowdSnd.play();
    crowdSnd.volume = 0.5;
    document.querySelector('#blockmainmenu').style.display="block";
    document.getElementById('mainmenu').style.visibility="visible";
    document.getElementById('mainmenu').classList.add("zoomOutAnim");
    setTimeout(function() {
        document.querySelector('#blockmainmenu').style.display="none";
        document.getElementById('mainmenu').classList.remove("zoomOutAnim");
    },4000);
}

let outercircle = document.getElementById('outercursor');
const onMouseOuterMove = (e) =>{
  outercircle.style.left = e.pageX + 'px';
  outercircle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseOuterMove);

let innercircle = document.getElementById('innercursor');
const onMouseInnerMove = (e) =>{
  innercircle.style.left = e.pageX + 'px';
  innercircle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseInnerMove);

let triangle = document.getElementById('arrowcursor');
const onMouseTriangleMove = (e) =>{
  triangle.style.left = e.pageX + 'px';
  triangle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseTriangleMove);

