import{a as L,i as d,S as v}from"./vendor-CxGRLx95.js";async function h(t,e){const s="https://pixabay.com/api/?",r="45713433-433c1b648e48abad27090f3cc";try{return(await L.get(`${s}`,{params:{key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"15",page:e}})).data}catch(o){console.log("Помилка при завантаженні фото:",o)}}const a={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),moreSearchBtn:document.querySelector(".js-search-more")};function u(t){return t.hits.map(s=>{const{webformatURL:r,largeImageURL:o,tags:y,likes:g,views:p,comments:f,downloads:S}=s;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <img
                  class="gallery-image"
                  src="${r}"
                  alt="${y}"
                  loading="lazy"
              /></a>
              <ul class="img-content-wrapper">
                <li class="img-content-descr">Likes<span>${g}</span></li>
                <li class="img-content-descr">Views<span>${p}</span></li>
                <li class="img-content-descr">Comments<span>${f}</span></li>
                <li class="img-content-descr">Downloads<span>${S}</span></li>
              </ul>
            </li>
      `}).join("")}a.searchForm.addEventListener("submit",w);a.moreSearchBtn.addEventListener("click",k);function i(){a.moreSearchBtn.classList.add("visually-hidden")}i();function b(){a.moreSearchBtn.classList.remove("visually-hidden")}let l=1,n="",m;async function w(t){t.preventDefault(),a.galleryEl.innerHTML="",n=t.target.search.value,a.loader.classList.remove("visually-hidden");try{l=1;const e=await h(n,l);if(!e.hits||e.hits.length===0){d.show({title:"❌",message:`Sorry, there are no images matching your search "${n}". Please try again!`,color:"red",backgroundColor:"#ffcccc",position:"topRight",timeout:5e3,close:!0,pauseOnHover:!0,progressBar:!0});return}let s=e.totalHits;l*15<s?b():i();const r=u(e);a.galleryEl.insertAdjacentHTML("afterbegin",r),m=new v(".gallery a",{captionsData:"alt",captionDelay:250})}catch{c("Щось пішло не так, спробуйте ще раз пізніше.")}finally{a.loader.classList.add("visually-hidden")}}async function k(t){l+=1,a.loader.classList.remove("visually-hidden");try{const e=await h(n,l);if(!e||e.length===0){i(),c("We're sorry, but you've reached the end of search results.");return}let s=e.totalHits;const r=u(e);a.galleryEl.insertAdjacentHTML("beforeend",r),m.refresh()}catch{c("Щось пішло не так, спробуйте ще раз пізніше.")}finally{a.loader.classList.add("visually-hidden")}}function c(t){d.show({title:"Помилка",message:t,color:"red",position:"topRight",timeout:5e3})}
//# sourceMappingURL=lesson-12-main-BWz01mve.js.map
