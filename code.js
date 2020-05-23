let colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickColor;


for(let i=0;i < squares.length ; i++){
 squares[i].style.backgroundColor = colors[i]
}