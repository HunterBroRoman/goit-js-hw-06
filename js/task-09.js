function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChange.addEventListener('click', changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = `${currentColor}`;
  spanColor.textContent = currentColor;
  
}


  

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const refs = {
//     body: document.body,
//     btnStart: document.querySelector('.change-color'),
// };

// const INTERVAL_DELAY = 1000;
// let intervalId = null;

// refs.btnStart.addEventListener('click', changeColor);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeColor() {
//     intervalId = setInterval(() => {
//         refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
//     }, INTERVAL_DELAY);
//     refs.btnStart.disabled = true;
// }


