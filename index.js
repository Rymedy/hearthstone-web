import Deck from "./deck.js"
var currentAttacker = null;
$(".cardinplay").on("click", function(e){
	if(currentAttacker === null) {
    	currentAttacker = $(this);
    	var xOrigin = e.pageX;
        var yOrigin = e.pageY;
    	$("svg").show();
    
	$("body").on("mousemove", function(e2){
		var xDest = e2.pageX;
		var yDest = e2.pageY;
		$("svg path").attr('d', 'M'+xDest+','+yDest+' '+xOrigin+','+yOrigin+'');
    });
}
	else {
		var snd = new Audio("attack.mp3");
    	var target = $(this),
        xEnd = e.pageX - (target.width()/2),
        yEnd = e.pageY - (target.height()/2),
        xStart = currentAttacker.offset().left,
        yStart = currentAttacker.offset().top;
        console.log($(this));
    
    	$("svg").hide();
    	snd.play();
    
    	$(currentAttacker).velocity({
			translateZ: 0,
			translateX: ""+xEnd - xStart+"px",
			translateY: ""+(yEnd - yStart)+"px"
    	},
    	{
      		duration: 200,
      		easing: [.7,.3,.73,.37]
    	}).velocity("reverse", { duration: 600, easing: [.01,.92,.09,.99]});
    	currentAttacker = null;
  	}
});

const computerCardSlot = document.querySelector('.computer-card-slot')

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)
