import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhotos } from "./lessons-11/pixabay-api";
import { refsLes11 } from "./lessons-11/refs-les11";
import { createMarkupGallery } from "./lessons-11/render-function";

refsLes11.searchForm.addEventListener('submit', sumbitFormSearch)

function sumbitFormSearch(event) {
  event.preventDefault();
  
  refsLes11.galleryEl.innerHTML = '';
  const query = event.target.search.value;

  refsLes11.loader.classList.remove('visually-hidden');

  getPhotos(query)
    .then(photos => {
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
        return;
      }

      const markup = createMarkupGallery(photos);
      refsLes11.galleryEl.insertAdjacentHTML('afterbegin', markup);

      const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      gallery.on('show.simplelightbox', function () {
        gallery.refresh();
      });
    })
    .catch(error => {
      console.log('Помилка при завантаженні фото:', error);
      iziToast.show({
        title: 'Помилка',
        message: 'Щось пішло не так, спробуйте ще раз пізніше.',
        color: 'red',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      refsLes11.loader.classList.add('visually-hidden');
    });
}
