window.requestAnimFrame = (function(){
  return window.requestAnimFrame            ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         function ( callback ){
           window.setTimeout(callback, 100 / 60);
         };
})();
// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

window.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
