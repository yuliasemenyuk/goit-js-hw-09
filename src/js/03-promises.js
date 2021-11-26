import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

let delay = Number(form.elements.delay.value);
let step = Number(form.elements.step.value);
let amount = form.elements.amount.value;
let position = 1;
for (let i = 1; i <= amount; i += 1) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });
  delay += step;
  position += 1;
};
}
  
