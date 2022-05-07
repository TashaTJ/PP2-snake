
// Game Screen variables 
const gameScreen = document.getElementById('game-screen');

// Game variables 
const grid = document.querySelector(".grid");
 /* const startButton = document.getElementById("start"); */
 const scoreDisplay = document.getElementById("score");
 let squares = [];
 let currentSnake = [2, 1, 0];
 let direction = 1;
 const width = 10;
 let appleIndex = 0;
 let score = 0;
 let intervalTime = 1000;
 let speed = 0.8;
 let timerId = 0;
 let gameOver = false;

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i = 0; i < width * width; i++) {
      //create element
      const square = document.createElement("div");
      //add styling to the element
      square.classList.add("square");
      //put the element into our grid
      grid.append(square);
      //push it into a new squares array
      squares.push(square);
    }
  }
  createGrid();