var openpackSnd = new Audio("src/sounds/openpack.mp3")
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
        collision = true
    } else {
        collision = false;
        openpackSnd.play();
        packElem.remove();
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
            setTimeout(function() {
                document.getElementById('openpacks').classList.remove("openPackShakeScreenAnim");
                var packElements = document.getElementsByClassName("pack");
                document.querySelector("#mainmenu").style.display = "block";
                document.querySelector("#openpacks").style.display = "none";
                document.querySelector("#pkcollisionbox").style.display = "none";
                for (let i = 0; i < packElements.length; i++) {
                    document.getElementsByClassName("pack")[i].style.display = "none";
                }
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
            },500);
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


