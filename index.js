



var randomNumber1= Math.floor(Math.random() * 6) +1;

var randomImage= "dice"+randomNumber1+".png";

var imageSource= "images/"+randomImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);



var randomNumber2= Math.floor(Math.random()* 6 ) +1;

var randomImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


//if statements

if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber2 > randomNumber1){

  document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Tie";
}
