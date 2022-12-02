//alert("JS linked !");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;  
var randomDiceImage="images/dice"+randomNumber1+".png";
var randomDiceImage2="images/dice"+randomNumber2+".png";

var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomDiceImage);

var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 won !";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 won !";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}
