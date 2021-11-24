
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body')

startBtn.addEventListener('click', switchStart);
stopBtn.addEventListener('click', switchStop);

let colorSwitcherTimer = null;
stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function switchStart() {
    colorSwitcherTimer = setInterval(() => bodyEl.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
}

function switchStop() {
    clearInterval(colorSwitcherTimer);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
}




