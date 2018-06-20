var numOfSquares = 6;
//create array of colors
var colors = generateRandomColors(numOfSquares);
//get squares
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColorButton");
colorDisplay.textContent = pickedColor;
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var modeButtons = document.querySelectorAll(".mode");

easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    //generate 3 new colors
    colors = generateRandomColors(numOfSquares);
    //pick new color
    pickedColor = pickColor();
    //display new color
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.background = "none"
        }
    }

});

hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    //pick new color
    pickedColor = pickColor();
    //display new color
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.background = "block"

    }
});

//loop through squares
for(var i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
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
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick new color
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    newColors.textContent = "New Colors";

});
