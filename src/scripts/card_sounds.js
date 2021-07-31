function cardPlaceSnds() {
    if (getNameOfElement == "Stormwind Champion") {
        let stormwindchampionSnd = new Audio("src/sounds/cardPlaceSnds/stormwind_champion_play.mp3")
        stormwindchampionSnd.play();
        stormwindchampionSnd.volume = 0.7;
        for (let i=0; i<playerCardSlot2.childElementCount - 1; i++) {
            let attackPlusOne = parseInt(playerCardSlot2.children[i].children[0].children[0].innerText);
            let healthPlusOne = parseInt(playerCardSlot2.children[i].children[1].children[0].innerText);
            playerCardSlot2.children[i].children[0].children[0].innerText = attackPlusOne + 1;
            playerCardSlot2.children[i].children[1].children[0].innerText = healthPlusOne + 1;
            playerCardSlot2.children[i].children[0].children[0].style.color = "#00d70c";
            playerCardSlot2.children[i].children[1].children[0].style.color = "#00d70c";
        }
    }
    else if (getNameOfElement == "Elven Archer") {
        let elvenarcherSnd = new Audio("src/sounds/cardPlaceSnds/elven_archer_play.mp3")
        elvenarcherSnd.play();
        elvenarcherSnd.volume = 0.7;
    }
    else if (getNameOfElement == "Razorfen Hunter") {
        let razorfenhunterSnd = new Audio("src/sounds/cardPlaceSnds/razorfen_hunter_play.mp3")
        razorfenhunterSnd.play();
        razorfenhunterSnd.volume = 0.7;
        setTimeout(function() {
            for(var i = 0; i < originalDeck.cards.length; i++) {
                if ((originalDeck.cards[i]['name'] == "Boar") && (playerCardSlot2.childElementCount != 7)) {
                    playerCardSlot2.appendChild(originalDeck.cards[i].getPlayerHTML())
                    break
                }
            }
        },1000);
    }
    else if (getNameOfElement == "Ragnaros the Firelord") {
        let ragnarosthefirelordSnd = new Audio("src/sounds/cardPlaceSnds/ragnaros_the_firelord_play.mp3")
        ragnarosthefirelordSnd.play();
        ragnarosthefirelordSnd.volume = 0.7;
        fadeOutInMusic();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
    }
    else if (getNameOfElement == "Deathwing") {
        let deathwingSnd = new Audio("src/sounds/cardPlaceSnds/deathwing_play.mp3")
        deathwingSnd.play();
        deathwingSnd.volume = 0.7;
        fadeOutInMusic();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
        // discard hand
        for (let i=0; i<hand.childElementCount; i++) {
            hand.children[i].remove();
        }
        // remove all minions on players board
        for (let i=0; i<playerCardSlot2.childElementCount; i++) {
            playerCardSlot2.children[i].remove();
        }
        // remove all minions on computers board
        for (let i=0; i<computerCardSlot.childElementCount; i++) {
            computerCardSlot.children[i].remove();
        }
    }
    else if (getNameOfElement == "Gnomish Inventor") {
        let gnomishinventorSnd = new Audio("src/sounds/cardPlaceSnds/gnomish_inventor_play.mp3")
        gnomishinventorSnd.play();
        gnomishinventorSnd.volume = 0.7;
          // the player draws a card if their hand is not full (max cards in hand 10 cards)
        if(hand.childElementCount != 10) {
            hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
        }
        checkForRequiredMana();
        enableDrag();
        placeCard();
        playerDeck.cards.shift();
        updateDeckCount();
    }
    else if (getNameOfElement == "Bloodfen Raptor") {
        let bloodfenraptorSnd = new Audio("src/sounds/cardPlaceSnds/bloodfen_raptor_play.mp3")
        bloodfenraptorSnd.play();
        bloodfenraptorSnd.volume = 0.7;
    }
    else if (getNameOfElement == "Boulderfist Ogre") {
        let boulderfistogreSnd = new Audio("src/sounds/cardPlaceSnds/boulderfist_ogre_play.mp3")
        boulderfistogreSnd.play();
        boulderfistogreSnd.volume = 0.7;
    }
    else if (getNameOfElement == "Voodoo Doctor") {
        let voodoodoctorSnd = new Audio("src/sounds/cardPlaceSnds/voodoo_doctor_play.mp3")
        voodoodoctorSnd.play();
        voodoodoctorSnd.volume = 0.7;
    }
    else if (getNameOfElement == "Devout Adventurer") {
        let devoutadventurerSnd = new Audio("src/sounds/cardPlaceSnds/devout_adventurer_play.mp3")
        devoutadventurerSnd.play();
        playerCardSlot2.lastChild.classList.add("hasDivineShield");
        playerCardSlot2.lastChild.children[2].style.visibility = "visible";
    }
    else if (getNameOfElement == "Elite Tauren Chieftain") {
        let elitetaurenchieftainSnd = new Audio("src/sounds/cardPlaceSnds/elite_tauren_chieftain_play.mp3")
        elitetaurenchieftainSnd.play();
        fadeOutInMusic();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
        // the player draws a card if their hand is not full (max cards in hand 10 cards)
        if(hand.childElementCount != 10) {
        hand.appendChild(playerDeck.cards[0].getPlayerCardsInHandHTML())
        }
        checkForRequiredMana();
        enableDrag();
        placeCard();
        playerDeck.cards.shift();
        updateDeckCount();
    }
    else if (getNameOfElement == "Leeroy Jenkins") {
        let leeyroyjenkinsSnd = new Audio("src/sounds/cardPlaceSnds/leeroy_jenkins_play.mp3")
        let leeyroyjenkinsmusicSnd = new Audio("src/sounds/cardPlaceSnds/leeroy_jenkins_music_play.mp3")
        leeyroyjenkinsSnd.play();
        leeyroyjenkinsSnd.volume = 0.7;
        leeyroyjenkinsmusicSnd.play();
        leeyroyjenkinsmusicSnd.volume = 0.7;
        fadeOutInMusic();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
        for(let i = 0; i < originalDeck.cards.length; i++) {
            if ((originalDeck.cards[i]['name'] == "Whelp") && (computerCardSlot.childElementCount != 7)) {
                computerCardSlot.appendChild(originalDeck.cards[i].getComputerHTML())
                break
            }
        }
        for(let i = 0; i < originalDeck.cards.length; i++) {
            if ((originalDeck.cards[i]['name'] == "Whelp") && (computerCardSlot.childElementCount != 7)) {
                computerCardSlot.appendChild(originalDeck.cards[i].getComputerHTML())
                break
            }
        }
        attack();
        computerCardSlot.style.transform = "translateY(17.5%)"; 
    }
    else if (getNameOfElement == "Acidic Swamp Ooze") {
        let acidicswampoozeSnd = new Audio("src/sounds/cardPlaceSnds/acidic_swamp_ooze_play.mp3")
        acidicswampoozeSnd.play();
    }
    else if (getNameOfElement == "Sen'jin Shieldmasta") {
        let senjinshieldmastaSnd = new Audio("src/sounds/cardPlaceSnds/senjin_shieldmasta_play.mp3")
        senjinshieldmastaSnd.play();
        senjinshieldmastaSnd.volume = 0.75;
        tauntExists = true;
        playerCardSlot2.lastChild.classList.add("hasTaunt");
        setTimeout(function() {
            playerCardSlot2.lastChild.children[3].style.visibility = "visible";
            let tauntSnd = new Audio("src/sounds/effectSnds/taunt.mp3")
            tauntSnd.play();
        },800);
    }
    else if (getNameOfElement == "Archmage") {
        let archmageSnd = new Audio("src/sounds/cardPlaceSnds/archmage_play.mp3")
        archmageSnd.play();
    }
    else if (getNameOfElement == "King Krush") {
        let kingkrushSnd = new Audio("src/sounds/cardPlaceSnds/king_krush_play.mp3")
        kingkrushSnd.play();
        attack();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
    }
    else if (getNameOfElement == "Lifedrinker") {
        let lifedrinkerSnd = new Audio("src/sounds/cardPlaceSnds/lifedrinker_play.mp3")
        lifedrinkerSnd.play();
        let opponentHeroHealth = parseInt(document.querySelector(".opposingHeroHealth").innerText);
        let playerHeroHealth = parseInt(document.querySelector(".playerHeroHealth").innerText);
        document.querySelector(".opposingHeroHealth").innerText = opponentHeroHealth - 3;
        if (playerHeroHealth <= 27) {
            document.querySelector(".playerHeroHealth").innerText = playerHeroHealth + 3;
        } else if (playerHeroHealth == 28) {
            document.querySelector(".playerHeroHealth").innerText = playerHeroHealth + 2;
        } else if (playerHeroHealth == 29) {
            document.querySelector(".playerHeroHealth").innerText = playerHeroHealth + 1;
        }

        document.querySelector("#computerdamagevalue").innerText = "-3";
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

        document.querySelector("#playerdamagevalue").innerText = "+3";
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
    else if (getNameOfElement == "Murloc Tidehunter") {
        let murloctidehunterSnd = new Audio("src/sounds/cardPlaceSnds/murloc_tidehunter_play.mp3")
        murloctidehunterSnd.play();
        setTimeout(function() {
            for(var i = 0; i < originalDeck.cards.length; i++) {
                if ((originalDeck.cards[i]['name'] == "Murloc Scout") && (playerCardSlot2.childElementCount != 7)) {
                    playerCardSlot2.appendChild(originalDeck.cards[i].getPlayerHTML())
                    let murlocscoutSnd = new Audio("src/sounds/cardPlaceSnds/murloc_scout_play.mp3")
                    murlocscoutSnd.play();
                    break
                }
            }
        },1000);
    }
    else if (getNameOfElement == "Murloc Scout") {
        let murlocscoutSnd = new Audio("src/sounds/cardPlaceSnds/murloc_scout_play.mp3")
        murlocscoutSnd.play();
    }
    else if (getNameOfElement == "Alexstrasza") {
        let alexstraszaSnd = new Audio("src/sounds/cardPlaceSnds/alexstrasza_play.mp3")
        let alexstraszamusicSnd = new Audio("src/sounds/cardPlaceSnds/alexstrasza_music_play.mp3")
        alexstraszaSnd.play();
        playerCardSlot2.lastChild.children[4].style.visibility = "visible";
        setTimeout(function() {
            alexstraszamusicSnd.play();
        },375);
        document.querySelector(".opposingHeroHealth").innerText = "15";
    }
    else if (getNameOfElement == "Saronite Chain Gang") {
        let saronitechaingangSnd = new Audio("src/sounds/cardPlaceSnds/saronite_chain_gang_play.mp3")
        saronitechaingangSnd.play();
        tauntExists = true;
        playerCardSlot2.lastChild.classList.add("hasTaunt");
        setTimeout(function() {
            playerCardSlot2.lastChild.children[3].style.visibility = "visible";
        },1999);
        setTimeout(function() {
            for(var i = 0; i < originalDeck.cards.length; i++) {
                if ((originalDeck.cards[i]['name'] == "Saronite Chain Gang") && (playerCardSlot2.childElementCount != 7)) {
                    playerCardSlot2.appendChild(originalDeck.cards[i].getPlayerHTML())
                    break
                }
            }
            playerCardSlot2.lastChild.classList.add("hasTaunt");
            setTimeout(function() {
                playerCardSlot2.lastChild.children[3].style.visibility = "visible";
            },1000);
        },2000);
    }
    else if (getNameOfElement == "The Lich King") {
        let lichkingSnd = new Audio("src/sounds/cardPlaceSnds/lich_king_play.mp3")
        lichkingSnd.play();
        fadeOutInMusic();
        document.getElementById('snowCanvas').style.display = "block";
        document.getElementById('snowCanvas').classList.add("fadeInAnim");
        playerCardSlot2.lastChild.classList.add("hasTaunt");
        setTimeout(function() {
            playerCardSlot2.lastChild.children[4].style.visibility = "visible";
        },1500);
        setTimeout(function() {
            playerCardSlot2.lastChild.children[3].style.visibility = "visible";
        },3300);
        setTimeout(function() {
            document.getElementById('snowCanvas').classList.remove("fadeInAnim");
            document.getElementById('snowCanvas').classList.add("fadeOutAnim");
            setTimeout(function() {
                document.getElementById('snowCanvas').classList.remove("fadeOutAnim");
                document.getElementById('snowCanvas').style.display = "none";
            },1000);
        },3000);
    }
}

function fadeOutInMusic() {
    lichkingOST.volume = 0.7;
    setTimeout(function() {
        lichkingOST.volume = 0.4;
        setTimeout(function() {
            lichkingOST.volume = 0.1;
            setTimeout(function() {
                lichkingOST.volume = 0.4;
                setTimeout(function() {
                    lichkingOST.volume = 1;
                },300);
            },4500);
        },250);
    },250);
}