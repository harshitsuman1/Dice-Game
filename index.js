let rand1 = Math.floor(Math.random()*6) + 1;
let rand2 = Math.floor(Math.random()*6) + 1;
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.setAttribute("src","./images/dice"+rand1+".png");
img2.setAttribute("src","./images/dice"+rand2+".png");

let h1 = document.querySelector("h1");

if(rand1 > rand2)
{
    h1.innerHTML = "Player 1 Wins!";
}
else if (rand1 == rand2)
{
    h1.innerHTML = "Draw"
}
else h1.innerHTML = "Player 2 Wins!";