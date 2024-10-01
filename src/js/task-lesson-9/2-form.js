// Початкові значення форми
const formData = { email: '', message: '' };

const feedBackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageTextarea = document.querySelector('[name="message"]');

// Додаємо слухачі подій для форми
feedBackForm.addEventListener('submit', handleFormSubmit);
feedBackForm.addEventListener('input', handleFormInput);

// Функція для заповнення форми зі збережених даних у localStorage
function populateForm() {
  // Отримуємо дані з localStorage або повертаємо порожній об'єкт, якщо даних немає
  const userFromStorage = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  // Заповнюємо поля форми, якщо дані є, або залишаємо порожнім
  emailInput.value = userFromStorage.email || '';
  messageTextarea.value = userFromStorage.message || '';
}

// Функція для обробки введення даних у форму
function handleFormInput({ target  }) {
  // Оновлюємо значення в об'єкті formData для відповідного поля
  formData[target .name] = target .value.trim();
  
  // Зберігаємо оновлені дані у localStorage
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для обробки відправки форми
function handleFormSubmit(event) {
  // Зупиняємо стандартну поведінку форми (оновлення сторінки)
  event.preventDefault();
  
  // Виводимо дані форми у консоль
  console.log(formData);

  // Видаляємо збережені дані з localStorage після відправки форми
  localStorage.removeItem('feedback-form-state');

  // Очищуємо всі поля форми за допомогою reset(), замість очищення кожного поля окремо
  feedBackForm.reset();
}

// Викликаємо функцію, щоб заповнити форму даними з localStorage при завантаженні сторінки
populateForm();
