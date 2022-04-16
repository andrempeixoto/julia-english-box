const playAudio = (audioPath) => {
  const audio = new Audio(audioPath);
  audio.play();
};

const playOne = () => {
  playAudio('../media/01.mp3');
};

const playTwo = () => {
  playAudio('../media/02.mp3');
};

const playThree = () => {
  playAudio('../media/03.mp3');
};

const playFour = () => {
  playAudio('../media/04.mp3');
};

const playFive = () => {
  playAudio('../media/05.mp3');
};

const playSix = () => {
  playAudio('../media/06.mp3');
};

const playSeven = () => {
  playAudio('../media/07.mp3');
};

const playEight = () => {
  playAudio('../media/08.mp3');
};

const playNine = () => {
  playAudio('../media/09.mp3');
};

const playTen = () => {
  playAudio('../media/10.mp3');
};

const animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

const bubblyButtons = document.getElementsByClassName('bubbly-button');

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
