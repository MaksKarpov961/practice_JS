import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as u}from"./assets/vendor-DbVqBAlR.js";function g(r){const l="https://pixabay.com/api/?",a="45713433-433c1b648e48abad27090f3cc",s=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"20"});return fetch(`${l}${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log("Помилка при завантаженні фото:",e)})}const t={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function h(r){return r.map(a=>{const{webformatURL:s,largeImageURL:e,tags:n,likes:o,views:c,comments:i,downloads:m}=a;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${n}"
                  loading="lazy"
              /></a>
              <ul class="img-content-wrapper">
                <li class="img-content-descr">Likes<span>${o}</span></li>
                <li class="img-content-descr">Views<span>${c}</span></li>
                <li class="img-content-descr">Comments<span>${i}</span></li>
                <li class="img-content-descr">Downloads<span>${m}</span></li>
              </ul>
            </li>
      `}).join("")}t.searchForm.addEventListener("submit",d);function d(r){r.preventDefault(),t.galleryEl.innerHTML="";const l=r.target.search.value;g(l).then(a=>{t.loader.classList.add("visually-hidden");const s=h(a);t.galleryEl.insertAdjacentHTML("afterbegin",s);const e=new u(".gallery a");e.on("show.simplelightbox",function(){e.refresh()})}).catch(a=>{console.log("Помилка при завантаженні фото:",a)}).finally(t.loader.classList.remove("visually-hidden"))}
//# sourceMappingURL=lesson-11.js.map
