import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line



const ulItem = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);


ulItem.insertAdjacentHTML('afterbegin', galleryMarkup)   


function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");
}

ulItem.addEventListener('click', event => {
    event.preventDefault()
})


const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
}); 