import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const galleryBigImageUrl = event.target.dataset.source;
  // console.log(galleryBigImageUrl);

  const instance = basicLightbox.create(`
    <img src="${galleryBigImageUrl}" width="800" height="600">
`);

  instance.show();
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
    })
    .join("");
}
