const gameboard=document.querySelector("#gameboard");
const ctx =gameboard.getContext("2d")
const scoreText=document.querySelector("#score");
const resertBtn=document.querySelector("#resertBtn");
const gamewidth=gameboard.width;
const gameheight=gameboard.height;
const boardBackground="white";
const Snakecolor="lightgreen";
const SnakeBorder="blue";
const foodcolor="red";
const unitSize=25;
let running=true; 
let xVelocity=unitSize;
let yVelocity=0;
let foodx;
let foody;
let Score=0;
let snake=[
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
];


window.addEventListener("keydown",changeDirection);
resertBtn.addEventListener("click",restartGame);


gameStart();


function gameStart(){
    const food=
    {
        x:0,
        y:0,
        height:25,
        width:25,
    }
    let score = 0;
    running=true; 
    scoreText.textcontent=score;
    createfood();
    drawsnake();
    nextTick();
};
function nextTick(){
    if(running){
        
        setInterval(()=>{
            clearboard();
            createfood();
            moveSnake();
            drawsnake();
            // checkGameover();
            // nextTick();
        }, 1000)
    }
    else{
        displayGameover();
    }
};0

function clearboard(){
    ctx.fillStyle=boardBackground;
    ctx.fillRect(0,0,gamewidth,gameheight);
};

/**
 * This fuction creates a food for the snake. 
 * We have used Math.random function to  generate location of the food.
 * @param {The food object which has the height and width of the food } food 
 */
function createfood(){

    function randomfood(min,max){
        const randNum=Math.round((Math.random() * (max-min)+min)/unitSize)*unitSize;
        return randNum;
    }

    x=randomfood(0, gamewidth-unitSize);
    y=randomfood(0, gamewidth-unitSize);
    ctx.fillStyle =foodcolor;
    ctx.fillRect(x,y,25,25);
    
};
// function drawfood(food){
//     ctx.fillstyle =foodcolor;
//     // ctx.strokeRect(food.x,food.y,unitSize,unitSize);
    
// };
/*
let snake=[
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
];
*/



function moveSnake(){
    console.log("hello")
    snake.forEach((a)=>{
        a.x+=unitSize;
    })
};

/**
 * This function creates the snake.
 * It takes the x,y values from the array we declared before.
 */
function drawsnake(){
    ctx.fillStyle=Snakecolor;
    ctx.strokeStyle=SnakeBorder;
    snake.forEach(snakePart=>{
        ctx.fillRect(snakePart.x,snakePart.y,25,25);
        ctx.strokeRect(snakePart.x,snakePart.y,25,25);
    })
};

function changeDirection(){};
function checkGameover(){};
function displayGameover(){
    console.log("gameover")
};
function restartGame(){};
function resetGame(){};