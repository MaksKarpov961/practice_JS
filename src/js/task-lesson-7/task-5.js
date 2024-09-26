function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const bodyEl = document.querySelector('body');
const textColor = document.querySelector('.color');
const changeButtonColor = document.querySelector('.change-color');
const resetButtonColor = document.querySelector('.reset-color');

// Додаємо обробники подій
changeButtonColor.addEventListener('click', handleClickButtonColorChange);
resetButtonColor.addEventListener('click', handleClickButtonColorReset);

// Функція для зміни кольору фону
function handleClickButtonColorChange() {
  const newColor = getRandomHexColor();
  textColor.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
}

// Функція для скидання кольору
function handleClickButtonColorReset() {
  textColor.textContent = '';
  bodyEl.style.backgroundColor = '';
}
