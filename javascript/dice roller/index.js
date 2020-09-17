/* rnd number between 1-6
make the file path
find attribute to change
set new image to attribute*/

//dice1
var randomNumber1 = ((Math.floor(Math.random()*6))+1);

var filePath = "images/dice"+randomNumber1+".png";

var image1  = document.querySelectorAll("img")[0];

var die1 = image1.setAttribute("src", filePath);




//dice2


var randomNumber2 = ((Math.floor(Math.random()*6))+1);

var filePath2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

var die2 = image2.setAttribute("src", filePath2);


//title


if (randomNumber1>randomNumber2){
	document.querySelector("h1").innerText="🎇 Player 1 wins";

} else if (randomNumber1<randomNumber2){
	document.querySelector("h1").innerText="Player 2 wins 🎇";
} else {
	document.querySelector("h1").innerText="🧨Draw🧨";
}
