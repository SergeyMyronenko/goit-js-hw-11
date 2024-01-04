import{S as u,i as d}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const m=document.querySelector(".form"),s=document.querySelector(".gallery");document.querySelector(".gallery-box");const c=document.querySelector(".loader");document.querySelector("input");let i={key:"37773269-50f55f614e71cb99e92638715",q:"black",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(o){c.style.display="block",s.style.display="none",fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(c.style.display="none",s.style.display="flex",!r.ok)throw new Error(error.message);return r.json()}).then(({hits:r})=>{if(r.length>0){const a=r.reduce((t,e)=>t+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${e.likes}</span></p>
          <p>views: <span class="text-value">${e.views}</span></p>
          <p>comments: <span class="text-value">${e.comments}</span></p>
          <p>downloads: <span class="text-value">${e.downloads}</span></p>
      </div>
      </li>`,"");s.innerHTML=a,new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}).refresh()}else s.style.display="none",d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{console.log(r)})}m.addEventListener("submit",o=>{o.preventDefault(),i.q=o.target.elements.search.value.trim();const r=new URLSearchParams(i);p(r),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
