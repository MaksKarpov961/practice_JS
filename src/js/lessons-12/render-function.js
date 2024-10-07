export function createMarkupGallery(data) {
  const markupGallery = data.hits.map(item => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = item;
    return `
            <li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
                  loading="lazy"
              /></a>
              <ul class="img-content-wrapper">
                <li class="img-content-descr">Likes<span>${likes}</span></li>
                <li class="img-content-descr">Views<span>${views}</span></li>
                <li class="img-content-descr">Comments<span>${comments}</span></li>
                <li class="img-content-descr">Downloads<span>${downloads}</span></li>
              </ul>
            </li>
      `;
  }).join(''); 

  return markupGallery;
}
