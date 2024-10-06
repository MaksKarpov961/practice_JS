import{a as u,i as l,S as p}from"./vendor-CxGRLx95.js";async function h(r,t){const e="https://pixabay.com/api/?",s="45713433-433c1b648e48abad27090f3cc";try{return(await u.get(`${e}`,{params:{key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:"15",page:t}})).data.hits}catch(a){console.log("Помилка при завантаженні фото:",a)}}const o={searchForm:document.querySelector(".search-form"),startSearchBtn:document.querySelector(".js-start-search"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),moreSearchBtn:document.querySelector(".js-search-more")};function y(r){return r.map(e=>{const{webformatURL:s,largeImageURL:a,tags:n,likes:c,views:i,comments:m,downloads:g}=e;return`
            <li class="gallery-item">
              <a class="gallery-link" href="${a}">
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
      `}).join("")}o.searchForm.addEventListener("submit",d);async function d(r){r.preventDefault(),o.galleryEl.innerHTML="";const t=r.target.search.value;o.loader.classList.remove("visually-hidden");try{const e=await h(t);if(e.length===0){l.show({title:"❌",message:`Sorry, there are no images matching your search "${t}". Please try again!`,color:"red",backgroundColor:"#ffcccc",position:"topRight",timeout:5e3,close:!0,pauseOnHover:!0,progressBar:!0});return}const s=y(e);o.galleryEl.insertAdjacentHTML("afterbegin",s);const a=new p(".gallery a",{captionsData:"alt",captionDelay:250});a.on("show.simplelightbox",function(){a.refresh()})}catch{l.show({title:"Помилка",message:"Щось пішло не так, спробуйте ще раз пізніше.",color:"red",position:"topRight",timeout:5e3})}finally{o.loader.classList.add("visually-hidden")}}
//# sourceMappingURL=lesson-12-main-CU8MRO4i.js.map
