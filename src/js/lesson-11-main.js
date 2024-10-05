// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { getPhotos } from "./lessons-11/pixabay-api";
import { refsLes11 } from "./lessons-11/refs-les11";
import { createMarkupGallery } from "./lessons-11/render-function";


refsLes11.searchForm.addEventListener('submit', sumbitFormSearch)

function sumbitFormSearch(event) {
  event.preventDefault()
  
  refsLes11.galleryEl.innerHTML=''
  const query = event.target.search.value;
  
  getPhotos(query)
    .then(photos => {
      refsLes11.loader.classList.add('visually-hidden')
      const markup = createMarkupGallery(photos);
      refsLes11.galleryEl.insertAdjacentHTML('afterbegin', markup);

      const  gallery = new SimpleLightbox('.gallery a');
      gallery.on('show.simplelightbox', function () {
        gallery.refresh()
});
    })
    .catch(error => {
      console.log('Помилка при завантаженні фото:', error);
    }).finally(
      refsLes11.loader.classList.remove('visually-hidden')
    );
}

