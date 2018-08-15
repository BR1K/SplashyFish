window.requestAnimFrame = (function(){
  return window.requestAnimFrame            ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         function ( callback ){
           window.setTimeout(callback, 100 / 60);
         };
})();
// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
