function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('[type="number"]'); // Інпут для вводу числа
const createButton = document.querySelector('[data-create]'); // Кнопка для створення
const destroyButton = document.querySelector('[data-destroy]'); // Кнопка для знищення
const boxesContainer = document.querySelector('#boxes'); // Контейнер для блоків


inputEl.addEventListener('input', handleUserInput)

createButton.addEventListener('click', handleButtonCreate)

destroyButton.addEventListener('click', handleButtonDestroy)

let inputValue = 0;

function handleUserInput(event) {
  inputValue = Number(event.target.value);
  
}


function handleButtonCreate(event) {
  
  const fragment = document.createDocumentFragment();
  if (inputValue > 100) {
    return alert('забагато')
  }

  let width = 30
  let height = 30
  
  boxesContainer.innerHTML = ''

  for (let index = 0; index < inputValue; index++) {

    const newDiv = document.createElement('div')
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${width}px`; // Збільшуємо ширину для кращої видимості
    newDiv.style.height = `${height}px`;
    newDiv.style.margin = '5px';
    
    width += 10
    height += 10

    fragment.appendChild(newDiv)
  }
  boxesContainer.appendChild(fragment)
  inputEl.value = ''

}


function handleButtonDestroy(event) {
  boxesContainer.innerHTML = ''
}