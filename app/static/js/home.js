import Dino from './dino.js';
import Car from './car.js';
import distance from './distance.js';
const fuscaContainer = document.querySelector('.fusca-container');
const image = document.querySelector('.dino').style;
const dino = new Dino();
let i = 0;
const onClickButton = document.querySelector('.start-button');

const playSound = () => {
  sound.src = 'audio/jump.mp3'
  sound.play()
}
const sound = new Audio();

const playSong = () => {
  song.src = 'audio/gtbt.mp3';
  song.play();
}
const song = new Audio();


let cmd = '';
const cars = [];

document.addEventListener('keypress', (e) => {
  if(dino.y === 0) {
    playSound();
    cmd = e.key;
  }
  if(e.key === 's') {
    dino.y = 0;
    dino.isJumping = false;
  }
});

onClickButton.addEventListener('click', () => {
  cars.length = 0;
  onClickButton.style.display = 'none';
  fuscaContainer.innerHTML = '';
  playSong();
  i = 0;
  const game = setInterval(() => {
    if(cmd === 'w') {
      cmd = '';
      dino.jump();
    }

    if(dino.isJumping) {
      dino.move();
      if(!dino.y) {
        dino.isJumping = false;
      }
    }

    if(Math.random() < 0.01) {
      cars.push(new Car());
      fuscaContainer.innerHTML += `
      <img class="fusca" id="car${i}" src="images/fusca.png" alt="fusca" />
      `;
      i++;
    }

    cars.forEach((car, index) => {
      car.move();
      document.querySelector(`#car${index}`).style.right = car.x + 'rem';
    });

    image.bottom = -dino.y + 'rem';

    distance(dino, cars, game)
  }, 20);
});