const gallery = document.querySelector(".gallery");
const galleryImages = gallery.querySelectorAll(".image");

let imageSize = (gallery.clientWidth / 100) * 30;
let imageSeparation = ((gallery.clientWidth / 100) * 10) / 6;
let moveDistance = imageSeparation * 2 + imageSize;

function updateImageSize() {
    imageSize = (gallery.clientWidth / 100) * 30;
    imageSeparation = ((gallery.clientWidth / 100) * 10) / 6;
    moveDistance = imageSeparation * 2 + imageSize;
}

function adjustGallery() {
    updateImageSize();
    gallery.style.height = `${imageSize}px`;

    for (image of galleryImages) {
        image.style.margin = `0px ${imageSeparation}px 0px ${imageSeparation}px`;
        image.style.width = `${imageSize}px`;
        image.style.height = `${imageSize}px`;
    }
}

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

let totalImages = galleryImages.length;
let position = 0;

function moveRight() {
    if (position < totalImages - 3) {
        updateImageSize();
        gallery.scrollTo(moveDistance * (position + 1), 0);
        position++;
    }
}
function moveLeft() {
    if (position > 0) {
        updateImageSize();
        gallery.scrollTo(moveDistance * (position - 1), 0);
        position--;
    }
}

adjustGallery();
