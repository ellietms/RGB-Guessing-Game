let numberOfSquares = 6;
let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor = pickRandomColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons()
    setUpSquares()
    reset();
}

function setUpModeButtons(){
// mode buttons
for(let i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6; 
        reset();
    })
 }

}

function setUpSquares(){
//set color and addEventListener for each square
for(let i=0;i < squares.length ; i++){
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    // grab color of clicked square
    let colorClickedSquare =this.style.backgroundColor;
    // compare color to pickedColor
    if(colorClickedSquare === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        // change the color of all squares
        changeToSameColor(colorClickedSquare);
        // change color of h1
        h1.style.backgroundColor = colorClickedSquare;
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
    }
)}
}

function reset(){
// generate new colors
colors = generateRandomColors(numberOfSquares);
//pick new random  color from array
 pickedColor = pickRandomColor();
 //change colorDisplay to match picked color
 colorDisplay.textContent = pickedColor;
 resetButton.textContent = "New Colors"
 messageDisplay.textContent = "";
 for(let i =0 ; i < squares.length ; i++){
  squares[i].style.display = "block" ;   
  colors[i] ? squares[i].style.backgroundColor = colors[i] : squares[i].style.display = "none";
 }
 h1.style.backgroundColor = "steelBlue";
}


// Reset button
resetButton.addEventListener("click",function(){
    reset();
})


//  change color of all squares to the correct color    
function changeToSameColor(color){
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


