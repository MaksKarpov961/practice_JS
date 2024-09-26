function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`; // Використовуємо '0' як рядок
}

// Константи для елементів
const inputEl = document.querySelector('[type="number"]'); // Інпут для вводу числа
const createButton = document.querySelector('[data-create]'); // Кнопка для створення
const destroyButton = document.querySelector('[data-destroy]'); // Кнопка для знищення
const boxesContainer = document.querySelector('#boxes'); // Контейнер для блоків

// Змінна для зберігання значення інпуту
let inputValue = 0;

// Додаємо обробник подій для інпуту
inputEl.addEventListener('input', handleListenerInputEl);

function handleListenerInputEl(event) {
  inputValue = Number(event.target.value.trim()); // Зберігаємо значення з інпуту як число
}

// Додаємо обробник подій для кнопки створення
createButton.addEventListener('click', handleClickCreateBtn);

function handleClickCreateBtn(event) {
  console.log(inputValue); // Виводимо значення інпуту
  createBoxes(inputValue); // Викликаємо функцію для створення блоків (якщо така є)
}

// Приклад функції для створення блоків
function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes); // Додаємо всі блоки в контейнер
}


destroyButton.addEventListener('click', handleClickdestroyBtn)

function handleClickdestroyBtn(event) {
  boxesContainer.innerHTML = '';
  inputEl.value = '';
}