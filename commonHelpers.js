import{i as l}from"./assets/vendor-59215b7c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=new URLSearchParams({key:"37773269-50f55f614e71cb99e92638715",q:"black",image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${c}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()}).then(t=>{console.log(t);const o=document.querySelector(".gallery"),s=t.reduce((n,e)=>n+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img src =${e.webformatURL} alt=${e.tags}/>
        </a>
      <p>Likes: ${e.likes}</p>
      <p>views: ${e.views}</p>
      <p>comments: ${e.comments}</p>
      <p>downloads: ${e.downloads}</p>
      </li>`,"");o.innerHTML=s}).catch(t=>{l.error({position:"bottomCenter",message:t.message})});
//# sourceMappingURL=commonHelpers.js.map
