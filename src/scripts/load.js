var mainmenuOST = new Audio("src/ost/mainmenu.mp3")
var crowdSnd = new Audio("src/sounds/crowd.mp3")
// voiceover's to be randomly selected in game
var items = [
    "src/voiceovers/innkeeper_1.mp3",
    "src/voiceovers/innkeeper_2.mp3",
    "src/voiceovers/innkeeper_3.mp3"
    ]
// randomly selects an element from the array 'items'
var item = items[Math.floor(Math.random()*items.length)];
var hasPlayedTutorial_deserailized = JSON.parse(localStorage.getItem("hasPlayedTutorial"));
// converts the string into an audio element
var voiceover = new Audio(item);
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('load').style.visibility="hidden";
            document.getElementById('load').style.opacity="0";
            document.getElementById('load').style.transition="visibility 0s 0.5s, opacity 0.5s linear";
            // get myGold on page load from local storage
            var myGold = Number(localStorage.getItem('myGold'));
            if (typeof myGold === 'undefined') {
                var myGold = 0;
                localStorage.setItem('myGold', myGold.toString());
            }
            // get myPacks on page load from local storage
            var myPacks = Number(localStorage.getItem('myPacks'));
            if (typeof myPacks === 'undefined') {
                var myPacks = 0;
                localStorage.setItem('myPacks', myPacks.toString());
            }
            // set innerText of myGold and innerText
            document.getElementById("myGold").innerText = myGold + "🪙";
            document.getElementById("myPacks").innerText = myPacks;
            // make an element and set innerText to myPacks in mainmenu
            for (let i = 0; i < myPacks; i++) {
                createPack();
            }
            document.getElementById("preventCORS").style.visibility = "visible";
        },250);
    }
  }

  