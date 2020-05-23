let colors= generateRandomColors();
let squares = document.querySelectorAll(".square");
console.log(squares)
let pickColor = pickRandomColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
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
    messageDisplay.textContent = "Correct"
    changeColors(colorClickedSquare);
}
    else{
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
    }
}
)
}

function changeColors(color){
    // loop through all squares
    for(let i=0; i < colors.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
}
}


function pickRandomColor(){
let random = Math.floor(Math.random()* colors.length)
return colors[random];

}