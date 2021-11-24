import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysIndex = document.querySelector('[data-days]');
const hoursIndex = document.querySelector('[data-hours]');
const minutesIndex = document.querySelector('[data-minutes]');
const secondsIndex = document.querySelector('[data-seconds]');

let userDate = null;

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', startTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
      onClose(selectedDates) {
          const dateNow = new Date();
          userDate = selectedDates[0].getTime();
          console.log(selectedDates[0]);
          
        if (selectedDates[0].getTime() >= dateNow.getTime()) {
            startBtn.classList.add('is-active');
            startBtn.removeAttribute("disabled");
            
        } else {
            startBtn.setAttribute("disabled", "");
            window.alert('Please choose a date in the future', {
                clickToClose: true,
                timeout: 4000,
                position: 'center-center',
                backOverlay: true,
            });
            }
      },
  };

flatpickr('input#datetime-picker', options);

function startTimer() {
    console.log('start');
    setInterval(() => {
        if (userDate <= Date.now()) 
        return;

        const currentTime = convertMs(userDate - Date.now());
        secondsIndex.textContent = addLeadingZero(currentTime.seconds);
        minutesIndex.textContent = addLeadingZero(currentTime.minutes);
        hoursIndex.textContent = addLeadingZero(currentTime.hours);
        daysIndex.textContent = addLeadingZero(currentTime.days);
        
    }, 1000)
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}



