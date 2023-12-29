import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchParams = new URLSearchParams({
  key: '37773269-50f55f614e71cb99e92638715',
  q: 'black',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

fetch(`https://pixabay.com/api/?${searchParams}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  })
  .then(images => {
    console.log(images);
    const gallery = document.querySelector('.gallery');

    const renderImg = images.reduce((html, image) => {
      return (
        html +
        `<li class="gallery-item">
        <a href=${image.largeImageURL}> 
          <img src =${image.webformatURL} alt=${image.tags}/>
        </a>
      <p>Likes: ${image.likes}</p>
      <p>views: ${image.views}</p>
      <p>comments: ${image.comments}</p>
      <p>downloads: ${image.downloads}</p>
      </li>`
      );
    }, '');
    gallery.innerHTML = renderImg;
  })
  .catch(error => {
    iziToast.error({
      position: 'bottomCenter',
      message: error.message,
    });
  });
