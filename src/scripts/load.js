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
           document.getElementById('contents').style.visibility="visible";
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
    }
  }

  