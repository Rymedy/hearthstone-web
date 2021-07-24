var openpackSnd = new Audio("src/sounds/openpack.mp3")
var cardflipSnd = new Audio("src/sounds/flipcard.mp3")
var overlapCardFlipSnd = new Audio("src/sounds/flipcard.mp3")
var rareSnd = new Audio("src/sounds/rare.mp3")
var epicSnd = new Audio("src/sounds/epic.mp3")
var legendarySnd = new Audio("src/sounds/legendary.mp3")
var alreadyHasRare = new Boolean(false);
function createPack() {
    const packPack = document.createElement('div');
    const packs = document.getElementById('body');
    const imgpack = document.createElement("IMG");
    packPack.classList.add("pack");
    imgpack.classList.add("pack-image");
    imgpack.src = "src/images/pack.png";
    imgpack.setAttribute('draggable', false);
    packs.appendChild(packPack);
    packPack.appendChild(imgpack);
    return packPack
}

function createCommonCard() {
	var numberOfElements = document.getElementById('containerOpenPack').childElementCount;
	const containerDiv = document.getElementById('containerOpenPack');
	const flipCard = document.createElement('div');
	const innerFlipCard = document.createElement('div');
	const frontFlipCard = document.createElement('div');
	const backFlipCard = document.createElement('div');
	const imgFlipCard = document.createElement("IMG");
	imgFlipCard.src = "src/images/legendcardback.png";
	flipCard.classList.add("flip-card");
	flipCard.classList.add("flip-card-common");
	innerFlipCard.classList.add("flip-card-inner");
	frontFlipCard.classList.add("flip-card-front");
	backFlipCard.classList.add("flip-card-back");
	imgFlipCard.style.width = "100%";
	imgFlipCard.style.height = "100%";
	containerDiv.appendChild(flipCard);
	flipCard.appendChild(innerFlipCard);
	innerFlipCard.appendChild(frontFlipCard);
	frontFlipCard.appendChild(imgFlipCard);
	innerFlipCard.appendChild(backFlipCard);
	if (numberOfElements == 0) {
		flipCard.style.top = "18%";
		flipCard.style.left = "38%";
	}
	else if (numberOfElements == 1) {
		flipCard.style.top = "10%";
		flipCard.style.left = "51.5%";
	}
	else if (numberOfElements == 2) {
		flipCard.style.top = "18%";
		flipCard.style.left = "67.5%";
	}
	else if (numberOfElements == 3) {
		flipCard.style.top = "57%";
		flipCard.style.left = "43%";
	}
	else if (numberOfElements == 4) {
		flipCard.style.top = "57.5%";
		flipCard.style.left = "60%";
	}
	return flipCard
}
function createRareCard() {
	var numberOfElements = document.getElementById('containerOpenPack').childElementCount;
	const containerDiv = document.getElementById('containerOpenPack');
	const flipCard = document.createElement('div');
	const innerFlipCard = document.createElement('div');
	const frontFlipCard = document.createElement('div');
	const backFlipCard = document.createElement('div');
	const imgFlipCard = document.createElement("IMG");
	imgFlipCard.src = "src/images/legendcardback.png";
	flipCard.classList.add("flip-card");
	flipCard.classList.add("flip-card-rare");
	innerFlipCard.classList.add("flip-card-inner");
	frontFlipCard.classList.add("flip-card-front");
	backFlipCard.classList.add("flip-card-back");
	imgFlipCard.style.width = "100%";
	imgFlipCard.style.height = "100%";
	containerDiv.appendChild(flipCard);
	flipCard.appendChild(innerFlipCard);
	innerFlipCard.appendChild(frontFlipCard);
	frontFlipCard.appendChild(imgFlipCard);
	innerFlipCard.appendChild(backFlipCard);
	if (numberOfElements == 0) {
		flipCard.style.top = "18%";
		flipCard.style.left = "38%";
	}
	else if (numberOfElements == 1) {
		flipCard.style.top = "10%";
		flipCard.style.left = "51.5%";
	}
	else if (numberOfElements == 2) {
		flipCard.style.top = "18%";
		flipCard.style.left = "67.5%";
	}
	else if (numberOfElements == 3) {
		flipCard.style.top = "57%";
		flipCard.style.left = "43%";
	}
	else if (numberOfElements == 4) {
		flipCard.style.top = "57.5%";
		flipCard.style.left = "60%";
	}
	return flipCard
}
function createEpicCard() {
	var numberOfElements = document.getElementById('containerOpenPack').childElementCount;
	const containerDiv = document.getElementById('containerOpenPack');
	const flipCard = document.createElement('div');
	const innerFlipCard = document.createElement('div');
	const frontFlipCard = document.createElement('div');
	const backFlipCard = document.createElement('div');
	const imgFlipCard = document.createElement("IMG");
	imgFlipCard.src = "src/images/legendcardback.png";
	flipCard.classList.add("flip-card");
	flipCard.classList.add("flip-card-epic");
	innerFlipCard.classList.add("flip-card-inner");
	frontFlipCard.classList.add("flip-card-front");
	backFlipCard.classList.add("flip-card-back");
	imgFlipCard.style.width = "100%";
	imgFlipCard.style.height = "100%";
	containerDiv.appendChild(flipCard);
	flipCard.appendChild(innerFlipCard);
	innerFlipCard.appendChild(frontFlipCard);
	frontFlipCard.appendChild(imgFlipCard);
	innerFlipCard.appendChild(backFlipCard);
	if (numberOfElements == 0) {
		flipCard.style.top = "18%";
		flipCard.style.left = "38%";
	}
	else if (numberOfElements == 1) {
		flipCard.style.top = "10%";
		flipCard.style.left = "51.5%";
	}
	else if (numberOfElements == 2) {
		flipCard.style.top = "18%";
		flipCard.style.left = "67.5%";
	}
	else if (numberOfElements == 3) {
		flipCard.style.top = "57%";
		flipCard.style.left = "43%";
	}
	else if (numberOfElements == 4) {
		flipCard.style.top = "57.5%";
		flipCard.style.left = "60%";
	}
	return flipCard
}
function createLegendaryCard() {
	var numberOfElements = document.getElementById('containerOpenPack').childElementCount;
	const containerDiv = document.getElementById('containerOpenPack');
	const flipCard = document.createElement('div');
	const innerFlipCard = document.createElement('div');
	const frontFlipCard = document.createElement('div');
	const backFlipCard = document.createElement('div');
	const imgFlipCard = document.createElement("IMG");
	imgFlipCard.src = "src/images/legendcardback.png";
	flipCard.classList.add("flip-card");
	flipCard.classList.add("flip-card-legendary");
	innerFlipCard.classList.add("flip-card-inner");
	frontFlipCard.classList.add("flip-card-front");
	backFlipCard.classList.add("flip-card-back");
	imgFlipCard.style.width = "100%";
	imgFlipCard.style.height = "100%";
	containerDiv.appendChild(flipCard);
	flipCard.appendChild(innerFlipCard);
	innerFlipCard.appendChild(frontFlipCard);
	frontFlipCard.appendChild(imgFlipCard);
	innerFlipCard.appendChild(backFlipCard);
	if (numberOfElements == 0) {
		flipCard.style.top = "18%";
		flipCard.style.left = "38%";
	}
	else if (numberOfElements == 1) {
		flipCard.style.top = "10%";
		flipCard.style.left = "51.5%";
	}
	else if (numberOfElements == 2) {
		flipCard.style.top = "18%";
		flipCard.style.left = "67.5%";
	}
	else if (numberOfElements == 3) {
		flipCard.style.top = "57%";
		flipCard.style.left = "43%";
	}
	else if (numberOfElements == 4) {
		flipCard.style.top = "57.5%";
		flipCard.style.left = "60%";
	}
	return flipCard
}

var collision = new Boolean(false);
var pack,
	image,
	packw,
	packh,
	packx,
	packy,
	opackx,
	opacky,
	pinx,
	piny,
	pinxperc,
	pinyperc,
	targetx,
	targety,
	rx,
	ry,
	targetrx,
	targetry,
	scale,
	targetscale,
	ww,
	wh,
	md,
	mx,
	my,
	whoosh,
	whooshvol,
	whooshvoltarget,
	majesty,
	majestyvol,
	majestyvoltarget,
	audioloaded;

function audioload() {
	audioloaded++;
	if( audioloaded == 2 ) {
		document.body.classList.add('loaded');
		majesty.play();
		whoosh.play();
		bindevents();
		loop();
	}
}

function init() {
	onresize();
	pack = document.querySelector('.pack');
	image = document.querySelector('.pack-image');
	packw = image.width;
	packh = image.height;
	packx = ww / 5 - packw / 2;
	packy = wh / 5 - packh / 2;
	opackx = packx;
	opacky = packy;
	pinx = 0;
	piny = 0;
	pinxperc = 0;
	pinyperc = 0;
	targetx = packx;
	targety = packy;
	rx = 0;
	ry = 0;
	targetrx = 0;
	targetry = 0;
	scale = 1;
	targetscale = scale;
	md = false;
	mx = packx;
	my = packy;
	audioloaded = 0;
	
	whooshvol = 0;
	whooshvoltarget = 0;
	whoosh = new Audio();
	whoosh.addEventListener('canplaythrough', audioload);
	whoosh.src = 'src/sounds/whoosh.ogg';
	whoosh.volume = 0;
	whoosh.loop = true;
	
	majestyvol = 0;
	majestyvoltarget = 0;
	majesty = new Audio();
	majesty.addEventListener('canplaythrough', audioload);
	majesty.src = 'src/sounds/majesty.ogg';
	majesty.volume = 0;
	majesty.loop = true;
}

function bindevents() {
	pack.addEventListener('mousedown', onmousedown);
	pack.addEventListener('mouseup', onmouseup);
	window.addEventListener('mousemove', onmousemove);
	window.addEventListener('resize', onresize);
}

function onmousedown( e ) {
	md = true;
	mx = e.pageX;
	my = e.pageY;
	pinx = packw / 2; // pin to center
	piny = packh / 2; // pin to center
	//pinx = mx - packx; // pin to click point
	//piny = my - packy; // pin to click point
	pinxperc = 100 - ( pinx / packw ) * 100; // transform based on the pin position
	pinyperc = 100 - ( piny / packh ) * 100; // transform based on the pin position
}

function onmouseup() {
	md = false;
    const pkcollisionbox = document.getElementById("pkcollisionbox");
    var packElem = document.querySelector('.pack');
    var aRect = pkcollisionbox.getBoundingClientRect();
    var bRect = packElem.getBoundingClientRect();
    if (
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))) {
        collision = true;
    } else {
		var firstPass = new Boolean(false);
		var secondPass = new Boolean(false);
		var thirdPass = new Boolean(false);
		var fourthPass = new Boolean(false);
		var fifthPass = new Boolean(false);
        collision = false;
        openpackSnd.play();
        packElem.remove();
		document.getElementById("backfrompackbtn").disabled = true;
        var myPacks = Number(localStorage.getItem('myPacks'));
        myPacks -= 1;
        localStorage.setItem('myPacks', myPacks.toString());
        document.getElementById("myPacks").innerText = myPacks;
        document.getElementById('packOpenAnimElem').style.display = "block";
        document.getElementById('packOpenAnimElem').classList.add("packOpenAnim");
        setTimeout(function() {
            document.getElementById('packOpenAnimElem').classList.remove("packOpenAnim");
            document.getElementById('packOpenAnimElem').style.display = "none";
            document.getElementById('openpacks').classList.add("openPackShakeScreenAnim");
			document.getElementById("openpacks").style.filter = "blur(5px)";
			document.getElementById("containerOpenPack").style.display = "block";
			var numOfCardsInPack = 4; // 4 plus guaranteed 1 rare card
			alreadyHasRare = false;
			for (let i = 0; i < numOfCardsInPack; i++) {
				var chanceModifier = Math.random();
				if (chanceModifier < 0.01) {
					// 1% chance
					createLegendaryCard();
				}
				else if (chanceModifier < 0.21) {
					// 20% chance
					createEpicCard();
				} else {
					// 30% chance
					createCommonCard();
				}
				if(alreadyHasRare == false) {
					createRareCard();
					alreadyHasRare = true;
				}
			}
			document.getElementsByClassName("flip-card")[0].classList.add("cardOnePackOpen");
			document.getElementsByClassName("flip-card")[1].classList.add("cardTwoPackOpen");
			document.getElementsByClassName("flip-card")[2].classList.add("cardThreePackOpen");
			document.getElementsByClassName("flip-card")[3].classList.add("cardFourPackOpen");
			document.getElementsByClassName("flip-card")[4].classList.add("cardFivePackOpen");
			for (let i = 0; i < document.getElementById("containerOpenPack").childElementCount; i++) {
				document.getElementsByClassName("flip-card")[i].onclick = function () {
					document.getElementsByClassName("flip-card")[i].classList.add("rotate-card");
					if (document.getElementsByClassName("flip-card")[i].classList.contains("flip-card-common")) {
						if (!cardflipSnd.paused) {
							overlapCardFlipSnd.play();
						} else {
							cardflipSnd.play();
						}
					}
					else if (document.getElementsByClassName("flip-card")[i].classList.contains("flip-card-rare")) {
						rareSnd.play();
						if (!cardflipSnd.paused) {
							overlapCardFlipSnd.play();
						} else {
							cardflipSnd.play();
						}
						document.getElementsByClassName("flip-card")[i].classList.remove("flip-card-rare");
						document.getElementById("openpacks").classList.add("rareFlipAnim");
						setTimeout(function() {
							document.getElementById("openpacks").classList.remove("rareFlipAnim");
						},100);
					}
					else if (document.getElementsByClassName("flip-card")[i].classList.contains("flip-card-epic")) {
						epicSnd.play();
						if (!cardflipSnd.paused) {
							overlapCardFlipSnd.play();
						} else {
							cardflipSnd.play();
						}
						document.getElementsByClassName("flip-card")[i].classList.remove("flip-card-epic");
						document.getElementById("openpacks").classList.add("epicFlipAnim");
						setTimeout(function() {
							document.getElementById("openpacks").classList.remove("epicFlipAnim");
						},150);
					}
					else if (document.getElementsByClassName("flip-card")[i].classList.contains("flip-card-legendary")) {
						legendarySnd.play();
						if (!cardflipSnd.paused) {
							overlapCardFlipSnd.play();
						} else {
							cardflipSnd.play();
						}
						document.getElementsByClassName("flip-card")[i].classList.remove("flip-card-legendary");
						document.getElementById("openpacks").classList.add("legendaryFlipAnim");
						setTimeout(function() {
							document.getElementById("openpacks").classList.remove("legendaryFlipAnim");
						},250);
					}
					if (document.getElementsByClassName("flip-card")[i].classList.contains("rotate-card")) {
						if (i == 0) {
							firstPass = true;
						}
						else if (i == 1) {
							secondPass = true;
						}
						else if (i == 2) {
							thirdPass = true;
						}
						else if (i == 3) {
							fourthPass = true;
						}
						else if (i == 4) {
							fifthPass = true;
						}
						if ((firstPass == true) && (secondPass == true) && (thirdPass == true) && (fourthPass == true) && (fifthPass == true)) {
							document.getElementById("donepackbutton").style.display = "block";
						}
					}
					document.getElementsByClassName("flip-card")[i].classList.add("notransition");
				};
			}
        },1700);
    }
}

function onmousemove( e ) {
	if( md ) {
		mx = e.pageX;
		my = e.pageY;
	}
}

function onresize() {
	ww = window.innerWidth;
	wh = window.innerHeight;
}

function loop() {
	requestAnimationFrame( loop )
	
	// set new target position
	targetx = mx - packx - pinx;
	targety = my - packy - piny;
	
	// lerp to new position
	packx += targetx * 0.25;
	packy += targety * 0.25;
	
	// contain pack to window bounds
	if( packx < -packw / 2 ) {
		packx = -packw / 2;
	}
	if( packx > ww - packw / 2 ) {
		packx = ww - packw / 2;
	}
	if( packy < -packh / 2 ) {
		packy = -packh / 2;
	}
	if( packy > wh - packh / 2 ) {
		packy = wh - packh / 2;
	}
	
	// get rotation based on how much pack moved
	targetrx = ( opacky - packy - rx ) * 3;
	targetry = ( packx - opackx - ry ) * 3;
	
	// lock rotation so things don't get too crazy
	targetrx = Math.min( targetrx, 90 );
	targetrx = Math.max( targetrx, -90 );
	targetry = Math.min( targetry, 90 );
	targetry = Math.max( targetry, -90 );
	
	// lerp to new rotation
	rx += targetrx * 0.1;
	ry += targetry * 0.1;
		
	// scale up when the mouse is pressed
	targetscale = md ? 1.2 - scale : 1 - scale;
	scale += targetscale * 0.2;
	
	// apply the transform to the pack
	pack.style[ 'transform' ] = 'translate3d(' + packx + 'px, ' + packy + 'px, 0)';
	image.style[ 'transform-origin' ] = pinxperc + '% ' + pinyperc + '%';
	image.style[ 'transform' ] = 'scale(' + scale + ') rotateY(' + ry + 'deg) rotateX(' + rx + 'deg)';

	majestyvoltarget = md ? 0.2 : 0;
	majestyvol += ( majestyvoltarget - majestyvol ) * 0.1;
	majesty.volume = majestyvol;
	
	whooshvoltarget = ( Math.abs( ( opacky - packy ) ) + Math.abs( ( opackx - packx ) ) ) * 0.003;
	whooshvol += ( whooshvoltarget - whooshvol ) * 0.1;
	whoosh.volume = Math.min( whooshvol, 1 );
	
	// store the old pack position
	opackx = packx;
	opacky = packy;
}


