import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhotos } from "./lessons-12/pixabay-api";
import { refsLes12 } from "./lessons-12/refs-les12";
import { createMarkupGallery } from "./lessons-12/render-function";

refsLes12.searchForm.addEventListener('submit', sumbitFormSearch)


async function sumbitFormSearch(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  refsLes12.galleryEl.innerHTML = ''; // Очищуємо галерею перед новим пошуком
  const query = event.target.search.value; // Отримуємо значення з поля пошуку

  refsLes12.loader.classList.remove('visually-hidden'); // Показуємо лоадер

  try {
    // Викликаємо функцію getPhotos з запитом
    const photos = await getPhotos(query);

    // Перевіряємо, чи є результати
    if (photos.length === 0) {
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
    const gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    
    // Оновлюємо галерею при показі
    gallery.on('show.simplelightbox', function () {
      gallery.refresh();
    });

  } catch (error) {
    // Обробка помилки при виконанні запиту
    iziToast.show({
      title: 'Помилка',
      message: 'Щось пішло не так, спробуйте ще раз пізніше.',
      color: 'red',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    // Сховати лоадер в будь-якому випадку
    refsLes12.loader.classList.add('visually-hidden');
  }
}

