// Game Screen variables 
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');

// Navigation buttons variables.
const startBtn = document.getElementById('start');
const homeBtn = document.getElementsByClassName('home');

startBtn.addEventListener('click', displayGameScreen);


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
    //readd the class of snake to our new currentSnake
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    timerId = setInterval(move, intervalTime);
}


// this should come after all fuctions 
function displayHomeScreen() {
    gameScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
    document.getElementsByClassName('controls')[0].style.disply = 'none';
}