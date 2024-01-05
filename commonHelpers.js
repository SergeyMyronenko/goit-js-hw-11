import{S as u,i as m}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector(".gallery-box");const i=document.querySelector(".loader");document.querySelector("input");const l={key:"37773269-50f55f614e71cb99e92638715",q:"black",image_type:"photo",orientation:"horizontal",safesearch:!0},f=new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function p(o){return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(({hits:t})=>{if(t.length>0){const a=t.reduce((s,e)=>s+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${e.likes}</span></p>
          <p>views: <span class="text-value">${e.views}</span></p>
          <p>comments: <span class="text-value">${e.comments}</span></p>
          <p>downloads: <span class="text-value">${e.downloads}</span></p>
      </div>
      </li>`,"");c.innerHTML=a,f.refresh()}else m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t.message)}).finally(()=>{i.style.display="none"})}d.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",i.style.display="block",l.q=o.target.elements.search.value.trim();const t=new URLSearchParams(l);p(t),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
