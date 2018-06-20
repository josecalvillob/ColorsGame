var numOfSquares = 6;
//create array of colors
var colors = [];
//get squares
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColorButton");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var modeButtons = document.querySelectorAll(".mode");

init();

//load up num of squares depending on button selected
function init(){
    setUpModeButtons();
    setUpSquares();
    reset();

}
 function setUpModeButtons() {
     for(var i = 0; i < modeButtons.length; i ++){
         modeButtons[i].addEventListener("click", function () {
             modeButtons[0].classList.remove("selected");
             modeButtons[1].classList.remove("selected");
             this.classList.add("selected");
             this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
             reset();
         });
     }
 }
 function setUpSquares(){
     //loop through squares
     for(var i = 0; i < squares.length; i++){
         //add click listeners to squares
         squares[i].addEventListener("click", function(){
             // this.classList.add(".clicked");
             //grab color of clicked
             var clickedColor = this.style.backgroundColor;
             if(clickedColor === pickedColor){
                 messageDisplay.textContent="Correct!";
                 changeColor(clickedColor);
                 h1.style.background = clickedColor
                 newColors.textContent = "Play Again!"
             }else{
                 this.style.backgroundColor = "#232323";
                 messageDisplay.textContent="Try Again!"
             }

         });
     }
 }


function reset(){
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick new color
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent = pickedColor;
    newColors.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i ++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }

    }

    h1.style.backgroundColor = "steelblue";

}



function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //Math.floor(Math.random() * 256)
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

newColors.addEventListener("click", function(){
    reset();
});
