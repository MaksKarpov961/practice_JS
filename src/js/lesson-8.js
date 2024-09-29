import { imagesLs8 } from "./refs/lesson-8-refs"
import * as basicLightbox from 'basiclightbox'

const galleryEl = document.querySelector('.gallery')

galleryEl.addEventListener('click', handleGalleryClick)

function createMarkup(array) {
  return array.map(item =>  `
  <li class="gallery-item">
    <a class="gallery-link" href="${item.original}"
      ><img
        class="gallery-image"
        src="${item.preview}"
        alt="${item.description}"
        data-source="${item.original}"
      /></a>
  </li>
    `).join('')
}



galleryEl.insertAdjacentHTML('afterbegin', createMarkup(imagesLs8))



function handleGalleryClick(event,) {
  event.preventDefault();


  
  if (event.target.classList.contains('gallery-image')) {
    const originalImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${originalImageUrl}" width="800" height="600">
    `);

    instance.show();
  }

}






