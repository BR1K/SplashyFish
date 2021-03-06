/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Background.js":
/*!**************************!*\
  !*** ./js/Background.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Background {

  constructor(src, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.src = src;
    this.img = null

    this.create.bind(this);
    this.create();
    this.draw.bind(this);
  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if (this.img != null) {
      // debugger
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }




}

/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),

/***/ "./js/Fish.js":
/*!********************!*\
  !*** ./js/Fish.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Fish {
  constructor(src, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = 115;
    this.y = 115;
    this.width = 115;
    this.height = 90;

    this.vy = 0;
    this.g = 0.20;

    this.src = src;
    this.img = null;
    this.frame = 0;

    this.create = this.create.bind(this);
    this.create();

  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if (this.img != null) {
      this.vy += this.g;
      this.y += this.vy

      if (this.y + this.height > this.canvas.height) {
        this.y = this.canvas.height - this.height;
        this.vy = 0;
      } else if (this.y < 0) {
        this.y = 0;
        this.vy = 0;
      }

      this.ctx.drawImage(this.img, this.frame * 256, 0, 256, 175, this.x, this.y, this.width, this.height);
      this.frame++;
      this.frame %= 6
      // debugger
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fish);


/***/ }),

/***/ "./js/Game.js":
/*!********************!*\
  !*** ./js/Game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Background */ "./js/Background.js");
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ "./js/Score.js");
/* harmony import */ var _ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObstacleGenerator */ "./js/ObstacleGenerator.js");
/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Obstacle */ "./js/Obstacle.js");
/* harmony import */ var _Fish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fish */ "./js/Fish.js");






class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.velocity = 5;
    this.currentState = 1;
    // console.log(this);
    this.startGame = this.startGame.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.drawStartScreen = this.drawStartScreen.bind(this);
    this.drawPlayingScreen = this.drawPlayingScreen.bind(this);
    this.drawGameOverScreen = this.drawGameOverScreen.bind(this);
    this.scrollBackground = this.scrollBackground.bind(this);
    this.drawObstacles = this.drawObstacles.bind(this);
    this.clearObstacles = this.clearObstacles.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.colliding = this.colliding.bind(this);
    this.reset = this.reset.bind(this);


    this.bindEvents = this.bindEvents.bind(this);
    this.createObjects = this.createObjects.bind(this);
    // this.background.create();
    // this.bindEvents();
    // this.createObjects();
  }

  createObjects() {
    this.background1 = new _Background__WEBPACK_IMPORTED_MODULE_0__["default"]('./images/background.png', this.canvas, this.ctx);
    this.background2 = new _Background__WEBPACK_IMPORTED_MODULE_0__["default"]('./images/background.png', this.canvas, this.ctx);
    this.background2.x = this.canvas.width;

    this.score = new _Score__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas, this.ctx);
    this.score.x = this.canvas.width - 150;
    this.score.y = 80;

    this.obstacleGenerator = new _ObstacleGenerator__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas, this.ctx, './images/mine.png');

    this.fish = new _Fish__WEBPACK_IMPORTED_MODULE_4__["default"]('images/fish2.png', this.canvas, this.ctx);
    // debugger
  }

  bindEvents() {
    // debugger
    document.addEventListener('keydown', (event) => {
      // debugger
      switch (this.currentState) {
        case 3:
        if (event.code === "KeyR") {
          this.reset();
          this.currentState = 2;
        }
        break;
      }
    });
    document.addEventListener('click', (event) => {
      switch (this.currentState) {
        case 1:
          this.currentState = 2;
          this.obstacleGenerator.generate();
          break;
        case 2:
          this.fish.vy = -1 * this.velocity;
          break;
        case 3:

          break;
      }

    });

  }

  reset() {
    this.score.start = new Date();
    this.score.currentScore = 0;
    this.obstacleGenerator.obstacles = [];
    this.fish.x = 115;
    this.fish.y = 115;
  }

  startGame() {

    // requestAnimationFrame(this.gameLoop);
    this.gameLoop();
  }

  gameLoop() {

    switch (this.currentState) {
      case 1:
        this.drawStartScreen();
        break;
      case 2:
        this.drawPlayingScreen();
        break;
      case 3:
        this.drawGameOverScreen();
        break;
    }

    requestAnimationFrame(this.gameLoop)
  }

  drawStartScreen() {
    // game background
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'white';
    this.ctx.font = '36px Arial';
    this.ctx.fillText('Click the mouse to help the fish swim!', this.canvas.width / 2 - 400, this.canvas.height / 3);
    this.ctx.fillText('Try to go as far as possible without crashing', this.canvas.width / 2 - 400, this.canvas.height / 3 + 100);
    this.ctx.fillText('Click to Start', this.canvas.width / 2 - 100, this.canvas.height / 3 + 300);

  }

  drawPlayingScreen() {
    // debugger
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.scrollBackground();

    this.score.draw();

    this.drawObstacles();

    this.fish.draw();

    this.checkCollisions();

  }

  checkCollisions() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.colliding(this.fish, this.obstacles[i])) {
        debugger
        this.currentState = 3;
      }
    }
  }

  colliding(fish, obstacle) {
    let colliding = true;

    const fishTop = fish.y;
    const fishBot = fish.y + fish.height;
    const fishRight = fish.x + fish.width;
    const fishLeft = fish.x;

    const obstacleTop = obstacle.y + obstacle.space + obstacle.height;
    const obstacleBot = obstacle.y + obstacle.height;
    const obstacleRight = obstacle.x + obstacle.width;
    const obstacleLeft = obstacle.x;

    if ((fishBot < obstacleTop && fishTop > obstacleBot)
      || (fishLeft > obstacleRight)
      || (fishRight < obstacleLeft + 20)) {
      colliding = false;
    }

    return colliding;
  }

  drawObstacles() {

    this.obstacles = this.obstacleGenerator.obstacles;

    for (let i = 0; i < this.obstacles.length; i++) {
      // debugger
      this.obstacles[i].draw();
      this.obstacles[i].x -= this.velocity;
    }

    this.clearObstacles();
  }

  clearObstacles() {
    this.obstacles = this.obstacleGenerator.obstacles;

    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].x + this.obstacles[i].width < 0) {
        this.obstacles.shift();
      }
    }
  }

  scrollBackground() {
    this.background1.draw();
    if (Math.abs(this.background1.x) > this.canvas.width) {
      this.background1.x = this.canvas.width - this.velocity;
    }
    this.background1.x = this.background1.x - this.velocity;

    this.background2.draw();
    if (Math.abs(this.background2.x) > this.canvas.width) {
      this.background2.x = this.canvas.width - this.velocity;
    }
    this.background2.x = this.background2.x - this.velocity;

  }

  drawGameOverScreen() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    debugger
    this.ctx.fillStyle = 'white';
    this.ctx.font = '54px Arial';
    this.ctx.fillText(`Score: ${this.score.score}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 180);
    debugger
    this.ctx.font = '36px Arial';
    this.ctx.fillText('GAME OVER', this.canvas.width / 2 - 100, this.canvas.height / 2);
    this.ctx.font = '24px Arial';
    this.ctx.fillText('Press R to Restart', this.canvas.width / 2 - 100, this.canvas.height / 2 + 50);

  }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./js/Obstacle.js":
/*!************************!*\
  !*** ./js/Obstacle.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Obstacle {
  constructor(canvas, ctx, src) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width;
    this.y = 0;
    this.width = 100;
    this.height = 0;
    this.space = 0;

    this.img = null;
    this.src = src;


    this.draw = this.draw.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.color = this.getRandomColor();
    this.createImg = this.createImg.bind(this);
    this.createImg();
  }

  createImg() {
    this.img = new Image();
    this.img.src = this.src;
  }


  draw() {
    // debugger
    if (this.img != null) {
      // debugger
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      this.ctx.drawImage(this.img, this.x, this.height + this.space - 40, this.width, this.canvas.height);
    }
    // this.ctx.fillStyle = this.color;
    //
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //
    // this.ctx.fillRect(this.x, this.height + this.space, this.width, this.canvas.height);

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  getRandomColor() {
    // debugger
    const red = this.getRandomInt(0, 257);
    const green = this.getRandomInt(0, 257);
    const blue = this.getRandomInt(0, 257);
    return `rgb(${red}, ${green}, ${blue})`;
    // debugger
  }


}

/* harmony default export */ __webpack_exports__["default"] = (Obstacle);


/***/ }),

/***/ "./js/ObstacleGenerator.js":
/*!*********************************!*\
  !*** ./js/ObstacleGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Obstacle */ "./js/Obstacle.js");


class ObstacleGenerator {
  constructor(canvas, ctx, src) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.src = src;

    this.minSpace = 200;
    this.maxSpace = 300;
    this.frequency = 1500;
    this.obstacles = [];

    this.generate = this.generate.bind(this);
  }

  generate() {
    setInterval(() => {
      let space = this.getRandomInt(this.minSpace, this.maxSpace);
      let height = this.getRandomInt(0, this.maxSpace);

      let obstacle = new _Obstacle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, this.src);
      obstacle.space = space;
      obstacle.height = height;

      this.obstacles.push(obstacle);

    }, this.frequency);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
  }


}
/* harmony default export */ __webpack_exports__["default"] = (ObstacleGenerator);


/***/ }),

/***/ "./js/Score.js":
/*!*********************!*\
  !*** ./js/Score.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Score{
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.start = new Date();
    this.currentScore = 0;
    this.x = 0;
    this.y = 0;

    this.draw = this.draw.bind(this);
  }

  draw() {
    const draw = new Date();
    this.score = parseFloat((draw - this.start) / 1000).toFixed(1);

    this.ctx.font = '45px Verdana';
    this.ctx.fillText(this.score, this.x, this.y)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);


/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./js/Game.js");


window.onload = function() {

  const canvas = document.getElementById('game');
  const splashyFish = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  splashyFish.startGame()
  splashyFish.bindEvents();
  splashyFish.createObjects();
  // splashyFish.drawObstacles();
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map