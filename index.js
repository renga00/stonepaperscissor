
var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-6

var randomImage = "stonepaperscissor" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSource2 = "images/stonepaperscissor" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1==1 && randomNumber2==2){
  document.querySelector("p").innerHTML="Player 2 wins"
  }
  else if(randomNumber1==2 && randomNumber2==3){
     document.querySelector("p").innerHTML="Player 2 wins"
  }
  else if(randomNumber1==1 && randomNumber2==3){
     document.querySelector("p").innerHTML="Player 1 wins"
  }
  else if(randomNumber1==2 && randomNumber2==1){
    document.querySelector("p").innerHTML="Player 1 wins"
    }
    else if(randomNumber1==3 && randomNumber2==2){
       document.querySelector("p").innerHTML="Player 1 wins"
    }
    else if(randomNumber1==3 && randomNumber2==1){
       document.querySelector("p").innerHTML="Player 1 wins"
    }
  else{
     document.querySelector("p").innerHTML="we are same try again"
  }