var openmenuSnd = new Audio("src/sounds/openmenu.mp3");
var menuhoverSnd = new Audio("src/sounds/menuselect.mp3");
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
    } else {
        // show game menu
        document.getElementById("gamemenu").style.display = "block";
        document.getElementById("gamemenuContent").style.display = "block";
        document.getElementById("gamemenuContent").classList.add('openMenuAnim');
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

var playbtn = document.querySelector('#playbutton');
var tutorialbtn = document.querySelector('#tutorialbutton');

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
        document.querySelector('#endturn').style.zIndex = "10";
        document.querySelector(".playerhero").style.zIndex = "5";
        document.querySelector(".opponenthero").style.zIndex = "5";
        song.play();
        document.querySelector(".playerHeroHealth").innerText = "30";
        document.querySelector(".opposingHeroHealth").innerText = "10";
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
        document.querySelector('#endturn').style.zIndex = "10";
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
        document.querySelector(".opponenthero").style.backgroundImage = "url(src/images/hogger.png)";
        document.querySelector('#endturn').style.zIndex = "10";
        document.querySelector(".playerhero").style.zIndex = "5";
        document.querySelector(".opponenthero").style.zIndex = "5";
        document.getElementById('transitionblock').style.visibility="visible";
        document.getElementById("block").style.visibility = "visible";
        document.querySelector('#endturn').style.zIndex = "9";
        document.querySelector('#confirm').style.display = "block";
        document.querySelector('#confirm').innerText = "";
        document.querySelector('#confirm').style.backgroundColor = "transparent";
        document.querySelector('#confirm').style.border = "none";
        document.querySelector('#confirm').style.width = "11%";
        document.querySelector('#confirm').style.height = "25%";
        document.querySelector('#confirm').style.top = "34%";
        document.querySelector('#confirm').style.left = "44.7%";
        document.querySelector('#confirm').style.transform = "rotate(-15deg)";
        document.querySelector('#confirm').style.backgroundImage = "url(src/images/pack.png)";
        document.querySelector('#triangle').style.visibility = "visible";
        document.querySelector('#hintbackbackground').style.visibility = "visible";
        document.querySelector('#hintbackground').style.visibility = "visible";
        document.querySelector('#hint').style.visibility = "visible";
        document.getElementById('triangle').classList.add("openMenuAnim");
        document.getElementById('hintbackbackground').classList.add("openMenuAnim");
        document.getElementById('hintbackground').classList.add("openMenuAnim");
        document.getElementById('hint').classList.add("openMenuAnim");
        setTimeout(function() {
            document.getElementById('transitionblock').classList.add("fadeInAnim");
            document.getElementById('transitionblock').classList.add("fadeOutAnim");
            setTimeout(function() {
                document.getElementById('transitionblock').style.visibility="hidden";
            },1000);
        },1000);
        document.getElementById('mainmenu').style.visibility="hidden";
        document.getElementById('contents').style.visibility="visible";
}


tutorialbtn.onclick = function () {
    openmenuSnd.play();
    tutorial();
};

const targetDiv = document.getElementById("fps");
const fpsbtn = document.getElementById('togglefps')
fpsbtn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
};
