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
const leftSound = new Audio('assets/sounds/left.mp3');
const rightSound = new Audio('assets/sounds/right.mp3');
const upSound = new Audio('assets/sounds/up.mp3');
const downSound = new Audio('assets/sounds/down.mp3');
let gameOverTone = new Audio('assets/sounds/game-over-tone.mp3');

let toggleSound = document.getElementById('sound');

// Loop over home buttons class and add event listener.
for (let home of homeBtn) {
  home.addEventListener('click', displayHomeScreen);
}

// touch controls 
let touchControls = document.getElementsByClassName('btnControls');
for (let i = 0; i < touchControls.length; i++) {
  touchControls[i].addEventListener('click', touchControlsClicked);
}

// Screen display functions
function displayGameScreen() {
  homeScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
  gameOverScreen.style.display = 'none';
  document.getElementsByClassName('controls')[0].style.display = 'flex';

  startGame();
}

/* Close modal & return to home screen */
closeBtn.addEventListener('click', () => {
  closeModal(gameOverScreen);
  displayHomeScreen();
});

// adds event listener to toggle sound button
toggleSound.addEventListener('click', (e) => {
  if (biteSound.muted === false && leftSound.muted === false && rightSound.muted === false && downSound.muted === false && upSound.muted === false && gameOverTone.muted === false) {
    e.target.style.color = 'greenyellow';
    e.target.className = 'fas fa-volume-mute';
    biteSound.muted = true;
    leftSound.muted = true;
    rightSound.muted = true;
    downSound.muted = true;
    upSound.muted = true;
    gameOverTone.muted = true;
  } else {
    e.target.style.color = 'white';
    e.target.className = 'fas fa-volume-up';
    biteSound.muted = false;
    leftSound.muted = false;
    rightSound.muted = false;
    downSound.muted = false;
    upSound.muted = false;
    gameOverTone.muted = false;
  }
});

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


/* Set ups game 
* initialises current snake
* initialises direction right 
* starts snake moving timer
* snake moves with 1 second gap
*/
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

/* deals with snake collisions (apples and walls)
* generates apple 
* plays game over tone
* exits game and clears the timer
* increments speed
*increments score
*/
function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width >= width - 1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    gameOverTone.play();
    exitGame();
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
  squares[currentSnake[0]].classList.add("snake");
}

// Clear game screen and display the score to user 
function exitGame() {
  gameScreen.style.display = 'flex';
  gameOverScreen.style.display = 'block';
  modalParagraph.textContent = `You scored: ${score}`;
  return gameOver;

}

// generates random position for apple, checks if apple is in snake body and if so generates a new position until apple is not on snake body
function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  let isAppleOver = false;
  for (let i = 0; i < currentSnake.length; i++) {
    if (currentSnake[i] == appleIndex) {
      isAppleOver = true;
    }
  }
  if (isAppleOver) {
    generateApple();
  }
  squares[appleIndex].classList.add("apple");
}
generateApple();

// set keyboard arrows direction, and plays sounds 
function control(e) {
  if (e.keyCode === 39) {
    direction = 1;
    rightSound.play();
  } else if (e.keyCode === 38) {
    direction = -width;
    upSound.play();
  } else if (e.keyCode === 37) {
    direction = -1;
    leftSound.play();
  } else if (e.keyCode === 40) {
    downSound.play();
    direction = +width;
  }
}

// sets touch control directions and plays sound, and toggles the sound on and off 
function touchControlsClicked() {
  if (this.getAttribute("id") === "btn-left") {
    direction = -1;
    leftSound.play();
  }
  if (this.getAttribute("id") === "btn-right") {
    direction = 1;
    rightSound.play();
  }
  if (this.getAttribute("id") === "btn-up") {
    direction = -width;
    upSound.play();
  }
  if (this.getAttribute("id") === "btn-down") {
    downSound.play();
    direction = +width;
  }
  if (this.getAttribute("id") === "pause") {
    const pauseElement = document.getElementById("pause");
    const element = pauseElement.children[0];
    // toggles pause button
    if (element.classList.contains("fa-pause")) {
      element.classList.remove("fa-solid");
      element.classList.remove("fa-pause");
      element.classList.add("fas");
      element.classList.add("fa-play");
      clearInterval(timerId);
    } else if (element.classList.contains("fa-play")) {
      element.classList.remove("fas");
      element.classList.remove("fa-play");
      element.classList.add("fa-solid");
      element.classList.add("fa-pause");
      timerId = setInterval(move, intervalTime);
    }
  }
}

document.addEventListener("keyup", control);

// prevents any other keys from being meaningful 
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

// closes the game over screen 
function closeModal(modal) {
  modal.style.display = 'none';
}

// displays initial home screen
function displayHomeScreen() {
  gameScreen.style.display = 'none';
  homeScreen.style.display = 'flex';
  document.getElementsByClassName('controls')[0].style.disply = 'none';
}