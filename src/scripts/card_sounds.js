function cardPlaceSnds() {
    if (getNameOfElement == "Stormwind Champion") {
        let stormwindchampionSnd = new Audio("src/sounds/cardPlaceSnds/stormwind_champion_play.mp3")
        stormwindchampionSnd.play();
        stormwindchampionSnd.volume = 0.7;
        fadeOutInMusic();
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
    }
    else if (getNameOfElement == "Ragnaros the Firelord") {
        let ragnarosthefirelordSnd = new Audio("src/sounds/cardPlaceSnds/ragnaros_the_firelord_play.mp3")
        ragnarosthefirelordSnd.play();
        ragnarosthefirelordSnd.volume = 0.7;
        fadeOutInMusic();
    }
    else if (getNameOfElement == "Deathwing") {
        let deathwingSnd = new Audio("src/sounds/cardPlaceSnds/deathwing_play.mp3")
        deathwingSnd.play();
        deathwingSnd.volume = 0.7;
        fadeOutInMusic();
    }
    else if (getNameOfElement == "Gnomish Inventor") {
        let gnomishinventorSnd = new Audio("src/sounds/cardPlaceSnds/gnomish_inventor_play.mp3")
        gnomishinventorSnd.play();
        gnomishinventorSnd.volume = 0.7;
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
    else if (getNameOfElement == "Leeroy Jenkins") {
        let leeyroyjenkinsSnd = new Audio("src/sounds/cardPlaceSnds/leeroy_jenkins_play.mp3")
        leeyroyjenkinsSnd.play();
        leeyroyjenkinsSnd.volume = 0.7;
        fadeOutInMusic();
    }
    else if (getNameOfElement == "Acidic Swamp Ooze") {
        let acidicswampoozeSnd = new Audio("src/sounds/cardPlaceSnds/acidic_swamp_ooze_play.mp3")
        acidicswampoozeSnd.play();
    }
    else if (getNameOfElement == "Kobold Geomancer") {
        let koboldgeomancerSnd = new Audio("src/sounds/cardPlaceSnds/kobold_geomancer_play.mp3")
        koboldgeomancerSnd.play();
    }
    else if (getNameOfElement == "Sen'jin Shieldmasta") {
        let senjinshieldmastaSnd = new Audio("src/sounds/cardPlaceSnds/senjin_shieldmasta_play.mp3")
        senjinshieldmastaSnd.play();
        senjinshieldmastaSnd.volume = 0.75;
    }
    else if (getNameOfElement == "Archmage") {
        let archmageSnd = new Audio("src/sounds/cardPlaceSnds/archmage_play.mp3")
        archmageSnd.play();
    }
    else if (getNameOfElement == "King Krush") {
        let kingkrushSnd = new Audio("src/sounds/cardPlaceSnds/king_krush_play.mp3")
        kingkrushSnd.play();
    }
    else if (getNameOfElement == "Murloc Tidehunter") {
        let murloctidehunterSnd = new Audio("src/sounds/cardPlaceSnds/murloc_tidehunter_play.mp3")
        murloctidehunterSnd.play();
    }
    else if (getNameOfElement == "Saronite Chain Gang") {
        let saronitechaingangSnd = new Audio("src/sounds/cardPlaceSnds/saronite_chain_gang_play.mp3")
        saronitechaingangSnd.play();
    }
    else if (getNameOfElement == "The Lich King") {
        let lichkingSnd = new Audio("src/sounds/cardPlaceSnds/lich_king_play.mp3")
        lichkingSnd.play();
        fadeOutInMusic();
        document.getElementById('snowCanvas').style.display = "block";
        document.getElementById('snowCanvas').classList.add("fadeInAnim");
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