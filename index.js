let randomNumber1 =  Math.floor(Math.random()*6)+1;
let randomImage = "dice" + randomNumber1 + ".png";
let imageSource = "images/" + randomImage;
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);

function start(){
    let randomNumber1 =  Math.floor(Math.random()*6)+1;
let randomImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomImage;
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);

let randomNumber2 =  Math.floor(Math.random()*6)+1;
let randomImage2 = "dice" + randomNumber2 + ".png";
var imageSource = "images/" + randomImage2;
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "😎Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "😎Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw the match";
}

}

function restart(){
    var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imageSource);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imageSource);
 document.querySelector("h1").textContent = "Lets Play";


}