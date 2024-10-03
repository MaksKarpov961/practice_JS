import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as g}from"./assets/vendor-DbVqBAlR.js";function h(t){const s="https://pixabay.com/api/?",a="45713433-433c1b648e48abad27090f3cc",r=new URLSearchParams({key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"20"});return fetch(`${s}${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log("Помилка при завантаженні фото:",e)})}const l={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery")};function p(t){return t.map(a=>{const{webformatURL:r,largeImageURL:e,tags:n,likes:o,views:c,comments:i,downloads:m}=a;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${r}"
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
      `}).join("")}l.searchForm.addEventListener("submit",u);function u(t){t.preventDefault(),l.galleryEl.innerHTML="";const s=t.target.search.value;h(s).then(a=>{const r=p(a);l.galleryEl.insertAdjacentHTML("afterbegin",r);const e=new g(".gallery a");e.on("show.simplelightbox",function(){e.refresh()})}).catch(a=>{console.log("Помилка при завантаженні фото:",a)})}
//# sourceMappingURL=lesson-11.js.map
