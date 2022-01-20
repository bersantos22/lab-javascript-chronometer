const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}
//innerText
function printMinutes() {
  let minute = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minute)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minute)[1];
}

function printSeconds() {

  let segundo = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(segundo)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(segundo)[1];
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit(split) {
  const li = document.createElement("li");
  li.innerText = split;
  splitsElement.appendChild(li)
  
}

function clearSplits() {
  splitsElement.innerHTML='';
}

function setStopBtn() {
chronometer.stop()
btnLeftElement.classList.toggle("stop");
btnLeftElement.classList.toggle("start");
btnLeftElement.innerText = 'START';
btnRightElement.classList.toggle("reset");
btnRightElement.classList.toggle("split");
btnRightElement.innerText ="RESET";
}

function setSplitBtn() {
  const split = chronometer.split();
  printSplit(split);

}

function setStartBtn() {
    chronometer.start(printTime)
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    btnLeftElement.innerText = 'STOP';
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
    btnRightElement.innerText ="SPLIT";

 }

function setResetBtn() {
  chronometer.reset();
  clearSplits()
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secUniElement.innerText = '0';
  secDecElement.innerText = '0';

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent==='START'){
   setStartBtn();
  }
  else{
    setStopBtn();
    
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent==='RESET'){
    setResetBtn();
    
  }else {
    setSplitBtn();
  }
});
