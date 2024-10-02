import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const datetimeInput = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

// Функція конвертації мілісекунд у дні, години, хвилини і секунди
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

// Вимикаємо кнопку старту за замовчуванням
function disableButtonStart() {
  buttonStart.disabled = true; 
}
disableButtonStart();


disableButtonStop(); 


function disableButtonStop() { 
  buttonStop.disabled = true; 
}


function enableButtonStop() { 
  buttonStop.disabled = false; 
}

function enableButtonStart() {
  buttonStart.disabled = false;
}


function disableDatetimeInput() { 
  datetimeInput.disabled = true;
}

function enableDatetimeInput() { 
  datetimeInput.disabled = false;
}

let userSelectedDate = null;
let intervalID = null; // Для зупинки інтервалу

// Налаштування Flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleSelectedDate(selectedDates[0]);
  },
};

flatpickr(datetimeInput, options);

// Перевіряємо вибрану дату та вмикаємо кнопку, якщо дата правильна
function handleSelectedDate(date) {
  userSelectedDate = date.getTime();
  const currentDate = new Date().getTime();
  
  if (userSelectedDate < currentDate) {
    disableButtonStart();
  iziToast.show({
    title: 'Error', // Заголовок повідомлення
    message: 'Please choose a date in the future', // Текст повідомлення
    color: 'red', // Колір заголовка
    backgroundColor: '#ffcccc', // Фон повідомлення
    position: 'topRight', // Позиція повідомлення на екрані
    timeout: 5000, // Час показу повідомлення (в мілісекундах)
    close: true, // Дозволити закриття повідомлення
    pauseOnHover: true, // Призупинити таймер при наведенні курсора
    progressBar: true, // Відображати індикатор прогресу
});
  } else {
    enableButtonStart();
  }
}

// Оновлюємо елементи таймера
function updateTimerElements(differentTime) { 
  const { days, hours, minutes, seconds } = differentTime;

  dataDays.textContent = `${String(days).padStart(2, '0')}`;
  dataHours.textContent = `${String(hours).padStart(2, '0')}`;
  dataMinutes.textContent = `${String(minutes).padStart(2, '0')}`;
  dataSeconds.textContent = `${String(seconds).padStart(2, '0')}`;
}

// Обробник кліку на кнопку "Start"
buttonStart.addEventListener('click', handleClickBtnStartTimer);

function handleClickBtnStartTimer(event) {
  const currentDate = new Date().getTime();

  // Відображаємо перший раз залишковий час
  const differentTime = convertMs(userSelectedDate - currentDate); 
  updateTimerElements(differentTime);

  // Запускаємо таймер з інтервалом в 1 секунду
  intervalID = setInterval(() => {
    const currentDate = new Date().getTime();
    const differentTime = convertMs(userSelectedDate - currentDate); 

    // Оновлюємо таймер
    updateTimerElements(differentTime);

    // Якщо час вийшов, зупиняємо таймер
    if (userSelectedDate - currentDate <= 0) {
      clearInterval(intervalID);
      dataDays.textContent = '00';
      dataHours.textContent = '00';
      dataMinutes.textContent = '00';
      dataSeconds.textContent = '00';
      disableButtonStop(); 
        iziToast.show({
          title: 'Success', // Заголовок повідомлення
          message: 'Time is up!', // Текст повідомлення
          color: 'green', // Колір заголовка
          backgroundColor: '#ccffcc', // Фон повідомлення
          position: 'topRight', // Позиція повідомлення на екрані
          timeout: 5000, // Час показу повідомлення (в мілісекундах)
          close: true, // Дозволити закриття повідомлення
          pauseOnHover: true, // Призупинити таймер при наведенні курсора
          progressBar: true, // Відображати індикатор прогресу
});

    }
  }, 1000);

  enableButtonStop(); 
  disableButtonStart(); 
  disableDatetimeInput(); 
}

// Обробник кліку на кнопку "Stop"
buttonStop.addEventListener('click', handleClickBtnStop);

function handleClickBtnStop(event) {
  clearInterval(intervalID);
  disableButtonStop(); 
  enableDatetimeInput(); 
  // Скидаємо таймер до початкового стану
  dataDays.textContent = '00';
  dataHours.textContent = '00';
  dataMinutes.textContent = '00';
  dataSeconds.textContent = '00';
}
