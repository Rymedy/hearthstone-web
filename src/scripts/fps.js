// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.ieRequestAnimationFrame     ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  var fpsElement = document.getElementById("fps");
  
  var then = Date.now() / 1000;  // get time in seconds
  var render = function() {
      var now = Date.now() / 1000;  // get time in seconds
      
      // compute time since last frame
      var elapsedTime = now - then;
      then = now;
      
      // compute fps
      var fps = 1 / elapsedTime;
      fpsElement.innerText = fps.toFixed(0) + "fps";  
      requestAnimFrame(render);
  };
render();

