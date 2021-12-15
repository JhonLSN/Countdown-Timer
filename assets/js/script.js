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
  let interval = setInterval(() =>{
    if(totalSeconds < 0){
      clearInterval(interval)
    }
    countTimer();  
  }, 1000);
}

function countTimer(){
  if(totalSeconds > 0){

  }
}

function setTimeLeft(){
  timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24))
  timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24)
  timeLeft.m = Math.floor(totalSeconds / (60) % 60)
  timeLeft.s = Math.floor(totalSeconds % 60)
}

init();