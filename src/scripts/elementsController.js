var openmenuSnd = new Audio("src/sounds/openmenu.mp3");
var menuhoverSnd = new Audio("src/sounds/menuselect.mp3");
// soundtrack's to be randomly selected in game
var items = [
    //"src/ost/mulligan.mp3", 
    //"src/ost/bad_reputation.mp3", 
    //"src/ost/better_hand.mp3", 
    //"src/ost/dont_let_your_guard_down.mp3",
    //"src/ost/duel.mp3",
    //"src/ost/the_forge.mp3",
    "src/ost/knights_of_the_frozen_throne.mp3"
    ]
// randomly selects an element from the array 'items'
var item = items[Math.floor(Math.random()*items.length)];
// converts the string into an audio element
var song = new Audio(item);
/* boolean to check if the audio is already playing to ensure multiple audio 
files do not play at the same time when the end turn button is clicked */
var audioIsPlayed = new Boolean(false)
document.addEventListener("keydown", function(){
    var x=event.keyCode || event.which;
    if(x==27)
    {
    var game = document.getElementById("game")
    var gamemenu = document.getElementById("gamemenu")
    var gamemenuContent = document.getElementById("gamemenuContent");
    if (gamemenuContent.style.display === "block")
    {
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
        song.play()
        song.volume = 0.7;
        audioIsPlayed = true;
    }
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