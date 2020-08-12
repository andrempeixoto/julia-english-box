function playOne() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/01.mp3');
  audio.play();
}

function playTwo() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/02.mp3');
  audio.play();
}

function playThree() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/03.mp3');
  audio.play();
}

function playFour() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/04.mp3');
  audio.play();
}

function playFive() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/05.mp3');
  audio.play();
}

function playSix() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/06.mp3');
  audio.play();
}

function playSeven() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/07.mp3');
  audio.play();
}

function playEight() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/08.mp3');
  audio.play();
}

function playNine() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/09.mp3');
  audio.play();
}

function playTen() {
  var audio = new Audio('https://peixotodev.com/julia-english-box/media/10.mp3');
  audio.play();
}

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}