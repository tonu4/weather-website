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
let running=false; 
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
    {x:0, y:0},
];

// ctx.fillStyle = 'lightblue';
// ctx.strokeStyle='black'

// const boxArray=[
//     {x:10,y:10},
//     {x:20,y:10},
//     {x:30,y:10},
//     {x:40,y:10},
//     {x:50,y:10}
// ]

// turnUpdown=(index)=>{
//     boxArray[index].y+=10;
// } 

// turnRight=(size)=>{
//     console.log(size)
//     if(size<=0){
//         for(i=0;i<5;i++){
//             boxArray[i].y+=10;
//         }
//     }
//     else{
//         for(i=0;i<size;i++){
//             boxArray[i].x+=10;
//         }
//     }
// }

// let turn=0;

// drawbox=()=>{
//     turnRight(4-turn);
//     if(turn<=4){
//         turnUpdown(4-turn);
//     }
//     turn++;

//     for(i=0;i<5;i++){
//         ctx.fillRect(boxArray[i].x,boxArray[i].y,10,10)
//         ctx.strokeRect(boxArray[i].x,boxArray[i].y,10,10)
//     }
// }







// setInterval(() => {
//     ctx.clearRect(0,0,gameboard.width,gameboard.height);
//     drawbox();
// }, 100);

window.addEventListener("keydown",chargeDirector);
resertBtn.addEventListener("click",restartGame);


gameStart();


function gameStart(){
    const food={
        x:0,
        y:0
    }
    let score = 0;
    running=true; 
    scoreText.textcontent=score;
    creatfood(food);
    drawfood(food);
    nextTick();
};
function nextTick(){
    if(running){
        
        setTimeout(()=>{
            clearboard();
            drawfood();
            movesnake();
            drawsnake();
            checkGameover();
            nextTick();
        }, 75)
    }
    else{
        displayGameover();
    }
};
function clearboard(){
    ctx.fillstyle=boardBackground;
    ctx.fillRect(0,0,gamewidth,gameheight);
};

function creatfood(food){
    function randomfood(min,max){
        const randNum=Math.round((Math.random() * (max-min)+min)/unitSize)*unitSize;
        return randNum;
    }
    
    food.x=randomfood(0, gamewidth-unitSize);
    food.y=randomfood(0, gamewidth-unitSize);
    
};
function drawfood(food){
    ctx.fillstyle =foodcolor;
    // ctx.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);
    
    ctx.strokeRect(food.x,food.y,unitSize,unitSize);
};
function movesnake(){

};
function drawsnake(){
    ctx.fillstyle=Snakecolor;
    ctx.strokestyle=SnakeBorder;
    snake.forEach(snakePart=>{
        ctx.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);
        ctx.strokeRect(snakePart.x,snakePart.y,unitSize,unitSize);
    })
};
function chargeDirector(){};
function checkGameover(){};
function displayGameover(){};
function restartGame(){};
function resetGame(){};