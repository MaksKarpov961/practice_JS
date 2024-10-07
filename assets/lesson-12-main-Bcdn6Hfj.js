import{a as b,i,S as v}from"./vendor-CxGRLx95.js";async function h(a,e){const r="https://pixabay.com/api/?",o="45713433-433c1b648e48abad27090f3cc";try{return(await b.get(`${r}`,{params:{key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"15",page:e}})).data}catch(s){console.log("Помилка при завантаженні фото:",s)}}const t={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),moreSearchBtn:document.querySelector(".js-search-more")};function m(a){return a.hits.map(r=>{const{webformatURL:o,largeImageURL:s,tags:p,likes:f,views:S,comments:w,downloads:L}=r;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${s}">
                <img
                  class="gallery-image"
                  src="${o}"
                  alt="${p}"
                  loading="lazy"
              /></a>
              <ul class="img-content-wrapper">
                <li class="img-content-descr">Likes<span>${f}</span></li>
                <li class="img-content-descr">Views<span>${S}</span></li>
                <li class="img-content-descr">Comments<span>${w}</span></li>
                <li class="img-content-descr">Downloads<span>${L}</span></li>
              </ul>
            </li>
      `}).join("")}t.searchForm.addEventListener("submit",k);t.moreSearchBtn.addEventListener("click",B);function c(){t.moreSearchBtn.classList.add("visually-hidden")}function u(){t.moreSearchBtn.classList.remove("visually-hidden")}function d(){t.loader.classList.remove("visually-hidden")}function g(){t.loader.classList.add("visually-hidden")}c();let l=1,n="",y;async function k(a){a.preventDefault(),t.galleryEl.innerHTML="",n=a.target.search.value,c(),d();try{l=1;const e=await h(n,l);if(!e.hits||e.hits.length===0){i.show({title:"❌",message:`Sorry, there are no images matching your search "${n}". Please try again!`,color:"red",backgroundColor:"#ffcccc",position:"topRight",timeout:5e3,close:!0,pauseOnHover:!0,progressBar:!0});return}const r=m(e);t.galleryEl.insertAdjacentHTML("afterbegin",r),y=new v(".gallery a",{captionsData:"alt",captionDelay:250});let o=e.totalHits;l*15<o?u():c()}catch{i.show({title:"Помилка",message:"Щось пішло не так, спробуйте ще раз пізніше.",color:"red",position:"topRight",timeout:5e3})}finally{g()}}async function B(a){l+=1,d(),c();try{const e=await h(n,l);if(!e.hits||e.hits.length===0){i.show({title:"Помилка",message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight",timeout:5e3});return}const r=m(e);t.galleryEl.insertAdjacentHTML("beforeend",r),y.refresh();const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"});let s=e.totalHits;l*15<s&&u()}catch{i.show({title:"Помилка",message:"Щось пішло не так, спробуйте ще раз пізніше.",color:"red",position:"topRight",timeout:5e3})}finally{g()}}
//# sourceMappingURL=lesson-12-main-Bcdn6Hfj.js.map
