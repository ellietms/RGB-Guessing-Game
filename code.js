let colors= generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickColor = pickRandomColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
colorDisplay.textContent = pickColor;


for(let i=0;i < squares.length ; i++){
// add initial colors to squares
 squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
squares[i].addEventListener("click",function(){
// grab color of clicked square
let colorClickedSquare =this.style.backgroundColor;
// compare color to pickedColor
if(colorClickedSquare === pickColor){
    messageDisplay.textContent = "Correct";
    // change the color of all squares
    changeColors(colorClickedSquare);
    // change color of h1
    h1.style.backgroundColor = colorClickedSquare;
}
else{
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again";
}
}
)}
//  change color of all squares
function changeColors(color){
 // loop through all squares
for(let i=0; i < colors.length; i++){
// change each color to match given color
squares[i].style.backgroundColor = color;
}
}

function pickRandomColor(){
let random = Math.floor(Math.random()* colors.length);
return colors[random];
}

//generate random colors for our squares
function generateRandomColors(numOfSquares){
    // make an array
    let array = []
    // add num random colors to array
    for(let i=0; i < numOfSquares ; i++){
    // get random color and push to array
    array.push(randomColor())
    }
    // return that array
    return array
}

function randomColor(){
    // pick a "red" from 0-255
  let red =  Math.floor(Math.random() * 256)
    // pick "green" from 0-255
  let green =   Math.floor(Math.random() * 256)
    // pick "blue" from 0-255
   let blue =  Math.floor(Math.random() * 256)
   return "rgb("+red +", "+green +", " +blue +")";
}