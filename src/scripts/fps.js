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

// declare an array that stores
let fps = [];

var render = function() {
    const now = Date.now();
    /* delete all frames older than 1000ms */
    while (fps.length > 0 && fps[0] <= now - 1000) {
      fps.shift();
    }
    /* add a single frame to the fps counter */
    fps.push(now);

    fpsElement.innerText = fps.length + "fps";  
    requestAnimFrame(render);
};
render();