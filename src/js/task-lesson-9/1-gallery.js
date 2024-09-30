import { imagesLs8 } from "../refs/lesson-8-refs";
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery')


function createMarkup(array) {
  // Повертаємо об'єднаний рядок із результатів роботи .map()
  return array.map(item => {
    const { preview, original, description } = item;
    
    // Явно повертаємо рядок із розміткою
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
      `;
  }).join("");
}


galleryEl.insertAdjacentHTML('afterbegin', createMarkup(imagesLs8))




let gallery = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionDelay: 250,
  }
);

