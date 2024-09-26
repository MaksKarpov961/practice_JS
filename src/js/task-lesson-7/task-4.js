
const loginForm  = document.querySelector('.login-form')

loginForm .addEventListener('submit', eventLisenerSubmit)

function eventLisenerSubmit(event) {
  event.preventDefault();// Зупиняємо відправку форми
  
  const email = loginForm.elements.email.value.trim()
  const password = loginForm.elements.password.value.trim()

  if (email === '' || password === '') {
    alert('All form fields must be filled in')
    return
  }
  
  const userLoginData = { email: email, password:password,}
  
  console.log(userLoginData);
  
  loginForm.reset();

  // loginForm.elements.email.value = '' ;
  // loginForm.elements.password.value = '' ;

}