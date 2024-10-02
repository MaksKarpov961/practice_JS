import iziToast from "izitoast"; // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів

const promiseFormData = document.querySelector('.form');

promiseFormData.addEventListener('submit', formSubmitCreate);

function formSubmitCreate(event) {
  event.preventDefault();

  const inputValue = Number(event.target.delay.value);
  const stateValue = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, inputValue);
  });

  promise
    .then(() => {
      iziToast.show({
        title: '✅', // Заголовок повідомлення
        message: `Fulfilled promise in ${inputValue}ms`, // Текст повідомлення
        color: 'green', // Колір заголовка
        backgroundColor: '#ccffcc', // Фон повідомлення
        position: 'topRight', // Позиція повідомлення на екрані
        timeout: 5000, // Час показу повідомлення (в мілісекундах)
        close: true, // Дозволити закриття повідомлення
        pauseOnHover: true, // Призупинити таймер при наведенні курсора
        progressBar: true, // Відображати індикатор прогресу
      });
    })
    .catch(() => {
      iziToast.show({
        title: '❌', // Заголовок повідомлення
        message: `Rejected promise in ${inputValue}ms`, // Текст повідомлення
        color: 'red', // Колір заголовка
        backgroundColor: '#ffcccc', // Фон повідомлення
        position: 'topRight', // Позиція повідомлення на екрані
        timeout: 5000, // Час показу повідомлення (в мілісекундах)
        close: true, // Дозволити закриття повідомлення
        pauseOnHover: true, // Призупинити таймер при наведенні курсора
        progressBar: true, // Відображати індикатор прогресу
      });
    });
}
