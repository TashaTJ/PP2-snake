// Game Screen variables 
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');

// Game Over variables 
const modalParagraph = document.getElementById('modal-result');

// Navigation buttons variables.
const startBtn = document.getElementById('start');
const homeBtn = document.getElementsByClassName('home');
const closeBtn = document.getElementsByClassName('close')[0];

startBtn.addEventListener('click', displayGameScreen);


// Game audio variables.
let biteSound = new Audio('assets/sounds/bite-sound.mp3');
const leftSound = new Audio('assets/sounds/left.wav');
const rightSound = new Audio('assets/sounds/right.wav');
const upSound = new Audio('assets/sounds/up.wav');
const downSound = new Audio('assets/sounds/down.wav');

// Loop over home buttons class and add event listener.
for (let home of homeBtn) {
  home.addEventListener('click', displayHomeScreen);
}

// Screen display functions
function displayGameScreen() {
  homeScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
  document.getElementsByClassName('controls')[0].style.display = 'flex';

  startGame();
}



// Game variables 
const grid = document.querySelector(".grid");
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

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function startGame() {
  //remove the snake
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  //remove the apple
  squares[appleIndex].classList.remove("apple");
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  score = 0;
  //re add new score to browser
  scoreDisplay.textContent = score;
  direction = 1;
  intervalTime = 1000;
  generateApple();
  //re add the class of snake to our new currentSnake
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  timerId = setInterval(move, intervalTime);
}

function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width > width - 1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    gameScreen.style.display = 'none';
    return clearInterval(timerId);
  }

  // remove the last element from our currentSnake array
  const tail = currentSnake.pop();
  // remove the styling from last element
  squares[tail].classList.remove("snake");
  // add square in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);
  // add styling so we can see it

  //deals with if snake gets apple 
  if (squares[currentSnake[0]].classList.contains("apple")) {
    //remove the class of apple
    squares[currentSnake[0]].classList.remove("apple");
    biteSound.play();
    //grow our snake by adding class of snake to it
    squares[tail].classList.add("snake");
    //grow our snake array
    currentSnake.push(tail);
    //generate new apple
    generateApple();
    //add one to the score
    score++;
    //display our score
    scoreDisplay.textContent = score;
    //speed up our snake
    clearInterval(timerId);
    intervalTime = intervalTime * speed;
    timerId = setInterval(move, intervalTime);
  }
  isGameOver();
  squares[currentSnake[0]].classList.add("snake");
}

function isGameOver() {
  let gameOver = false;

  // if(direction === 1) {
  //   return false;
  // }

  // Walls 
  if (currentSnake[0] >= width * width && direction === width) { // bottom
    gameOver = true;
  } else if (currentSnake[0] === width && direction === 1) { // right       
    gameOver = true;
  } else if (currentSnake[0] <= 0 && direction === -1) { // left
    gameOver = true;
  } else if (currentSnake[0] <= 0 && direction === -width) { // top
    gameOver = true;
  }
  if (gameOver) {
    gameScreen.style.display = 'none';
  
  }
  console.log("game over", gameOver);
  console.log(modalParagraph);
  return gameOver;

}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}
generateApple();


function control(e) {
  if (e.keyCode === 39) {
    console.log("right pressed");
    direction = 1;
    rightSound.play();
  } else if (e.keyCode === 38) {
    console.log("up pressed");
    direction = -width;
    upSound.play()
  } else if (e.keyCode === 37) {
    console.log("left pressed");
    direction = -1;
    leftSound.play();
  } else if (e.keyCode === 40) {
    console.log("down pressed");
    downSound.play();
    direction = +width;
  }
}

document.addEventListener("keyup", control);
/* startBtn.addEventListener('click', displayGameScreen);*/
/* startGame(); */

window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);





// this should come after all functions 

function displayHomeScreen() {
  gameScreen.style.display = 'none';
  homeScreen.style.display = 'flex';
  document.getElementsByClassName('controls')[0].style.disply = 'none';
}