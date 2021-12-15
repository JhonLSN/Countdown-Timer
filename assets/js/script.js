const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timeLeft = {
  d: 0,
  h: 0,
  m: 0,
  s: 0,
}

let totalSeconds;

function init() {
  totalSeconds = Math.floor((new Date('01.01.2022') - new Date()) / 1000); 
}

init();