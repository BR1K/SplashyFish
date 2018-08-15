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

// mozilla

window.getRandomColor = function() {
  const red = getRandomInt(0, 257);
  const green = getRandomInt(0, 257);
  const blue = getRandomInt(0, 257);
  return "rgb('+r+','+g+','+b+')";
};
