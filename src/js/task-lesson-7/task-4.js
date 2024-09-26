const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); // Зупиняємо відправку форми

  const form = event.target; // Отримуємо форму, яка викликала подію
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (validateForm(email, password)) {
    return alert('All form fields must be filled in');
  }
  
  const userLoginData = { email, password };
  
  console.log(userLoginData);
  
  form.reset(); // Скидаємо форму
}

function validateForm(email, password) {
  return email === '' || password === ''; // Перевіряємо, чи заповнені поля
}
