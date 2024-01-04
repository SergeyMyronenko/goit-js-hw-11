import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const galleryBox = document.querySelector('.gallery-box');
const loader = document.querySelector('.loader');
const input = document.querySelector('input');

let searchParamsDefaults = {
  key: '37773269-50f55f614e71cb99e92638715',
  q: 'black',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function searchImg(params) {
  loader.style.display = 'block';
  gallery.style.display = 'none';
  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      loader.style.display = 'none';
      gallery.style.display = 'flex';
      if (!response.ok) {
        throw new Error(error.message);
      }
      return response.json();
    })
    .then(({ hits }) => {
      if (hits.length > 0) {
        const renderImg = hits.reduce((html, hit) => {
          return (
            html +
            `<li class="gallery-item">
        <a href=${hit.largeImageURL}> 
          <img class="gallery-img" src =${hit.webformatURL} alt=${hit.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${hit.likes}</span></p>
          <p>views: <span class="text-value">${hit.views}</span></p>
          <p>comments: <span class="text-value">${hit.comments}</span></p>
          <p>downloads: <span class="text-value">${hit.downloads}</span></p>
      </div>
      </li>`
          );
        }, '');

        gallery.innerHTML = renderImg;

        let lightbox = new SimpleLightbox('.gallery a', {
          nav: true,
          captionDelay: 250,
          captionsData: 'alt',
          close: true,
          enableKeyboard: true,
          docClose: true,
        });
        lightbox.refresh();
      } else {
        gallery.style.display = 'none';
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  searchParamsDefaults.q = event.target.elements.search.value.trim();
  const searchParams = new URLSearchParams(searchParamsDefaults);
  searchImg(searchParams);
  event.currentTarget.reset();
});
