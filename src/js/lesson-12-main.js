import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhotos } from "./lessons-12/pixabay-api";
import { refsLes12 } from "./lessons-12/refs-les12";
import { createMarkupGallery } from "./lessons-12/render-function";

// Додаємо обробники подій
refsLes12.searchForm.addEventListener('submit', submitFormSearch);
refsLes12.moreSearchBtn.addEventListener('click', handleClickMoreSearchBtn);

function disableMoreSearchBtnOf() {
  refsLes12.moreSearchBtn.classList.add('visually-hidden');
}

function enableMoreSearchBtnOf() {
  refsLes12.moreSearchBtn.classList.remove('visually-hidden');
}

function showLoader() {
  refsLes12.loader.classList.remove('visually-hidden');
}

function hideLoader() {
  refsLes12.loader.classList.add('visually-hidden');
}

disableMoreSearchBtnOf(); // Приховуємо кнопку при початковому завантаженні

let searchPage = 1; // Номер сторінки для пошуку
let query = ''; // Запит для пошуку
let gallery; // Зберігаємо посилання на галерею

async function submitFormSearch(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми
  refsLes12.galleryEl.innerHTML = ''; // Очищуємо галерею перед новим пошуком
  query = event.target.search.value; // Отримуємо значення з поля пошуку

  disableMoreSearchBtnOf(); // Ховаємо кнопку перед початком нового пошуку
  showLoader(); // Показуємо лоадер

  try {
    searchPage = 1; // Скидаємо номер сторінки на 1
    const photos = await getPhotos(query, searchPage); // Викликаємо функцію getPhotos з запитом
    
    // Перевіряємо, чи є результати
    if (!photos.hits || photos.hits.length === 0) {
      iziToast.show({
        title: '❌',
        message: `Sorry, there are no images matching your search "${query}". Please try again!`,
        color: 'red',
        backgroundColor: '#ffcccc',
        position: 'topRight',
        timeout: 5000,
        close: true,
        pauseOnHover: true,
        progressBar: true,
      });
      return; // Якщо немає результатів, виходимо з функції
    }

    // Створюємо розмітку галереї з отриманих фото
    const markup = createMarkupGallery(photos);
    refsLes12.galleryEl.insertAdjacentHTML('afterbegin', markup); // Додаємо розмітку в галерею

    // Ініціалізуємо SimpleLightbox
    gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    let total = photos.totalHits;
    
    // Перевіряємо, чи є ще результати для завантаження
    if (searchPage * 15 < total) {
      enableMoreSearchBtnOf(); // Показати кнопку, якщо ще є результати
    } else {
      disableMoreSearchBtnOf(); // Сховати кнопку, якщо досягли кінця результатів
    }

  } catch (error) {
    iziToast.show({
      title: 'Помилка',
      message: 'Щось пішло не так, спробуйте ще раз пізніше.',
      color: 'red',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    hideLoader(); // Сховати лоадер в будь-якому випадку
  }
}

async function handleClickMoreSearchBtn(event) {
  searchPage += 1; // Збільшуємо номер сторінки
  showLoader(); // Показуємо лоадер
  disableMoreSearchBtnOf(); // Ховаємо кнопку під час завантаження нових зображень

  try {
    const morePhotos = await getPhotos(query, searchPage); // Отримуємо більше фотографій
    
    if (!morePhotos.hits || morePhotos.hits.length === 0) {
      iziToast.show({
        title: 'Помилка',
        message: "We're sorry, but you've reached the end of search results.",
        color: 'red',
        position: 'topRight',
        timeout: 5000,
      });
      return;
    }

    // Створюємо розмітку з нових фотографій
    const markup = createMarkupGallery(morePhotos);
    refsLes12.galleryEl.insertAdjacentHTML('beforeend', markup); // Додаємо нові фото в галерею

    // Оновлюємо SimpleLightbox
    gallery.refresh(); // Оновлюємо галерею, щоб включити нові зображення

    // Прокручування на дві висоти картки
    const cardHeight = document.querySelector('.gallery li').getBoundingClientRect().height; // Отримуємо висоту картки
    window.scrollBy({
      top: cardHeight * 2, // Прокручуємо вниз на дві висоти картки
      behavior: 'smooth',  // Додаємо плавний ефект прокручування
    });

    let total = morePhotos.totalHits;

    // Перевіряємо, чи є ще результати для завантаження
    if (searchPage * 15 < total) {
      enableMoreSearchBtnOf(); // Показати кнопку, якщо ще є результати
    }

  } catch (error) {
    iziToast.show({
      title: 'Помилка',
      message: 'Щось пішло не так, спробуйте ще раз пізніше.',
      color: 'red',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    hideLoader(); // Сховати лоадер в будь-якому випадку
  }
}

