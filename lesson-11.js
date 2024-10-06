import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as l,S as u}from"./assets/vendor-a2BocS2h.js";function h(t){const r="https://pixabay.com/api/?",a="45713433-433c1b648e48abad27090f3cc",s=new URLSearchParams({key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"20"});return fetch(`${r}${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log("Помилка при завантаженні фото:",e)})}const o={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function p(t){return t.map(a=>{const{webformatURL:s,largeImageURL:e,tags:n,likes:c,views:i,comments:m,downloads:g}=a;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${n}"
                  loading="lazy"
              /></a>
              <ul class="img-content-wrapper">
                <li class="img-content-descr">Likes<span>${c}</span></li>
                <li class="img-content-descr">Views<span>${i}</span></li>
                <li class="img-content-descr">Comments<span>${m}</span></li>
                <li class="img-content-descr">Downloads<span>${g}</span></li>
              </ul>
            </li>
      `}).join("")}o.searchForm.addEventListener("submit",d);function d(t){t.preventDefault(),o.galleryEl.innerHTML="";const r=t.target.search.value;o.loader.classList.remove("visually-hidden"),h(r).then(a=>{if(a.length===0){l.show({title:"❌",message:`Sorry, there are no images matching your search "${r}". Please try again!`,color:"red",backgroundColor:"#ffcccc",position:"topRight",timeout:5e3,close:!0,pauseOnHover:!0,progressBar:!0});return}const s=p(a);o.galleryEl.insertAdjacentHTML("afterbegin",s);const e=new u(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){e.refresh()})}).catch(a=>{console.log("Помилка при завантаженні фото:",a),l.show({title:"Помилка",message:"Щось пішло не так, спробуйте ще раз пізніше.",color:"red",position:"topRight",timeout:5e3})}).finally(()=>{o.loader.classList.add("visually-hidden")})}
//# sourceMappingURL=lesson-11.js.map
