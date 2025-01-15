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
const Direction= false;
let running=true; 
let xVelocity=unitSize;
let yVelocity=0;
let Score=0;
let snake=[
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
];
let food=Object({
    x:155,
    y:137,
    color: "red"
});


window.addEventListener("keydown",changeDirection);
resertBtn.addEventListener("click",restartGame);


gameStart();

let intervalId;

function gameStart(){
    let score = 0;
    running=true; 
    scoreText.textcontent=score;
    createfood(food);
    drawsnake();
    nextTick();
};
function nextTick(){
    if(running){
        
        intervalId=setInterval(()=>{
            clearboard();
            moveSnake(Direction);
            drawfood(food);
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

    food.x=randomfood(0, gamewidth-unitSize);
    food.y=randomfood(0, gamewidth-unitSize);
};


function drawfood(food){
    ctx.fillStyle =foodcolor;
    ctx.fillRect(food.x,food.y,25,25);
};




function moveSnake(){
    snake.forEach((snakeBox)=>{
        snakeBox.x=(snakeBox.x+xVelocity)%500;
        snakeBox.y=(snakeBox.y+yVelocity)%500;
    })

    if(snake[0].x==food.x && snake[0].y==food.y){
        createfood();
        Score++;
        scoreText.innerHTML=Score;
    }

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

let count=0;
function transform(){
    snake[0].y+=4*unitSize;
    snake[0].x+=unitSize;
    snake[1].y+=3*unitSize;
    snake[1].x+=2*unitSize;
    snake[2].y+=2*unitSize;
    snake[2].x+=3*unitSize;
    snake[3].y+=unitSize;
    snake[3].x+=4*unitSize;
}

function reverseTransform(){
    snake[0].x+=4*unitSize;
    snake[0].y+=unitSize;
    snake[1].x+=3*unitSize;
    snake[1].y+=2*unitSize;
    snake[2].x+=2*unitSize;
    snake[2].y+=3*unitSize;
    snake[3].x+=unitSize;
    snake[3].y+=4*unitSize;
}

function changeDirection(event){

    goingUp= (yVelocity==-unitSize)
    goingDown= (yVelocity==unitSize)
    goingRight= (xVelocity==unitSize)
    goingLeft= (xVelocity==-unitSize)


    switch(event.key){
        case "ArrowDown":
            console.log("going Down");
            xVelocity=0;
            yVelocity=unitSize;
            if(!goingDown && !goingUp) transform();
            break;
        case "ArrowUp":
            console.log("going Up");
            xVelocity=0;
            yVelocity=-unitSize;
            if(!goingDown && !goingUp) transform();
            break;
        case "ArrowRight":
            console.log("going right");
            xVelocity=unitSize;
            yVelocity=0;
            if(!goingRight && !goingLeft) reverseTransform();
            break;
        case "ArrowLeft":
            console.log("going Left")
            xVelocity=-unitSize;
            yVelocity=0;
            if(!goingLeft && !goingRight) reverseTransform();
    }
};



function checkGameover(){};
function displayGameover(){
    clearInterval(intervalId)
    console.log("gameover")
};
function restartGame(){};
function resetGame(){};