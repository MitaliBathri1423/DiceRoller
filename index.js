var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceeImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceeImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceeImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceeImage2;

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 won";
} 
else {
    document.querySelector("h1").innerHTML = "tie up";
}