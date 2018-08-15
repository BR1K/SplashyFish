import Game from './Game';

window.onload = function() {

  const canvas = document.getElementById('game');
  const splashyFish = new Game(canvas);
  splashyFish.startGame()
  splashyFish.bindEvents();
  splashyFish.createObjects();
  // splashyFish.drawObstacles();
};
