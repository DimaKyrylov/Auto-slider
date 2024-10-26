var masImgUrl = [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.jpg",
    "6.jpg"
];
var i = 0;
var sliderImg = document.getElementById("slider__img")

function moveLeft(){
    i--;
    if(i < 0){
        i = masImgUrl.length - 1;
    }
    sliderImg.style.backgroundImage = "url(" + masImgUrl[i] + ")";
}

function moveRight(){
    i++;
    if(i == masImgUrl.length){
        i = 0;
    }
    sliderImg.style.backgroundImage = "url(" + masImgUrl[i] + ")";
}
setInterval(moveRight,2000)