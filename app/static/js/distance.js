const dinoSelector = document.querySelector('.dino');
const fuscaSelector = document.querySelector('.fusca');
let dinoWidth = window.getComputedStyle(dinoSelector).width;
let dinoHeight = window.getComputedStyle(dinoSelector).height;
let fuscaWidth = window.getComputedStyle(fuscaSelector).width;
let fuscaHeight = window.getComputedStyle(fuscaSelector).height;

const stringToNumber = (str) => {
  return Number(str.substr(0, str.indexOf('p')));
}

dinoWidth = stringToNumber(dinoWidth);
fuscaWidth = stringToNumber(fuscaWidth);
const distMin = (dinoWidth + fuscaWidth)/2;
fuscaHeight = stringToNumber(fuscaHeight);
dinoHeight = stringToNumber(dinoHeight);

const getPositionAtCenter = (element) => {
   const {top, left, width, height} = element.getBoundingClientRect();
   return {
     x: left + width / 2,
     y: top + height / 2
   };
 }

let dinoInitialY = getPositionAtCenter(dinoSelector).y;

const distance = (dino, cars, game) => {
  cars.forEach((car, index) => {
    let carX = getPositionAtCenter(document.querySelector(`#car${index}`)).x;
    const dinoX = getPositionAtCenter(dinoSelector).x;
    const dinoY = getPositionAtCenter(dinoSelector).y + dinoHeight/2;                                                                 
    
    if(Math.abs(carX - dinoX) < distMin) {
      if(dinoY >= (dinoInitialY - fuscaHeight + 100)) {
        clearInterval(game);
        alert(`${cars.length} pontos`);
        document.querySelector('.start-button').style.display = 'block';
      }
    }
  });
}

export default distance;