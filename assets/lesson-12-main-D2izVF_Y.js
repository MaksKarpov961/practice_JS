import{i as o,S as g}from"./vendor-a2BocS2h.js";function h(r){const t="https://pixabay.com/api/?",a="45713433-433c1b648e48abad27090f3cc",s=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"20"});return fetch(`${t}${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log("Помилка при завантаженні фото:",e)})}const l={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function p(r){return r.map(a=>{const{webformatURL:s,largeImageURL:e,tags:n,likes:c,views:i,comments:m,downloads:u}=a;return`
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
                <li class="img-content-descr">Downloads<span>${u}</span></li>
              </ul>
            </li>
      `}).join("")}l.searchForm.addEventListener("submit",d);function d(r){r.preventDefault(),l.galleryEl.innerHTML="";const t=r.target.search.value;l.loader.classList.remove("visually-hidden"),h(t).then(a=>{if(a.length===0){o.show({title:"❌",message:`Sorry, there are no images matching your search "${t}". Please try again!`,color:"red",backgroundColor:"#ffcccc",position:"topRight",timeout:5e3,close:!0,pauseOnHover:!0,progressBar:!0});return}const s=p(a);l.galleryEl.insertAdjacentHTML("afterbegin",s);const e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){e.refresh()})}).catch(a=>{o.show({title:"Помилка",message:"Щось пішло не так, спробуйте ще раз пізніше.",color:"red",position:"topRight",timeout:5e3})}).finally(()=>{l.loader.classList.add("visually-hidden")})}
//# sourceMappingURL=lesson-12-main-D2izVF_Y.js.map
