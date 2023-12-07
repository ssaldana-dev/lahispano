// Seleccionar el contenedor de la galería y las imágenes dentro de él.
const galleryContainer = document.querySelector(".gallery");
const galleryImages = galleryContainer.querySelectorAll(".image");

// Inicializar variables para el tamaño de la imagen, separación entre imágenes y distancia de movimiento.
let imageSize, imageSeparation, moveDistance;

// Función para actualizar el tamaño de la imagen y su separación relacionadas con el tamaño de la galería.
function updateImageProperties() {
    if (galleryContainer.clientWidth > 850) {
        imageSize = (galleryContainer.clientWidth / 100) * 20;
        imageSeparation = ((galleryContainer.clientWidth / 100) * 20) / 8;
        moveDistance = imageSeparation * 2 + imageSize;
    } else {
        imageSize = (galleryContainer.clientWidth / 100) * 30;
        imageSeparation = ((galleryContainer.clientWidth / 100) * 10) / 6;
        moveDistance = imageSeparation * 2 + imageSize;
    }
}

// Función para ajustar el tamaño de las imágenes y su separación dentro de la galería.
function adjustGallery() {
    updateImageProperties();
    galleryContainer.style.height = `${imageSize}px`;
    galleryContainer.scrollTo(moveDistance * currentPosition, 0);

    // Iterar sobre todas las imágenes y aplicar estilos.
    for (const image of galleryImages) {
        image.style.margin = `0px ${imageSeparation}px 0px ${imageSeparation}px`;
        image.style.width = `${imageSize}px`;
        image.style.height = `${imageSize}px`;
    }
}

// Seleccionar los botones de navegación izquierda y derecha.
const leftNavigationButton = document.querySelector(".left");
const rightNavigationButton = document.querySelector(".right");

// Agregar eventos de clic a los botones de navegación.
leftNavigationButton.addEventListener("click", moveLeft);
rightNavigationButton.addEventListener("click", moveRight);

// Inicializar variables para el número total de imágenes y la posición actual.
let totalImages = galleryImages.length;
let currentPosition = 0;

// Función para desplazar la galería hacia la derecha.
function moveRight() {
    if (galleryContainer.clientWidth > 850) {
        if (currentPosition < totalImages - 4) {
            updateImageProperties();
            galleryContainer.scrollTo(moveDistance * (currentPosition + 1), 0);
            currentPosition++;
        }
    } else {
        if (currentPosition < totalImages - 3) {
            updateImageProperties();
            galleryContainer.scrollTo(moveDistance * (currentPosition + 1), 0);
            currentPosition++;
        }
    }
}

// Función para desplazar la galería hacia la izquierda.
function moveLeft() {
    if (currentPosition > 0) {
        updateImageProperties();
        galleryContainer.scrollTo(moveDistance * (currentPosition - 1), 0);
        currentPosition--;
    }
}

// Función para ajustar la galería al cambiar el tamaño de la página.
function adjustGalleryOnResize() {
    adjustGallery();
}

// Añadir un evento que llame a la función cuando cambie el tamaño de la ventana.
window.addEventListener("resize", adjustGalleryOnResize);

// Función para ajustar la galería al cargar la página.
function adjustGalleryOnLoad() {
    adjustGallery();
}

// Añadir un evento que llame a la función cuando se cargue la página.
window.addEventListener("load", adjustGalleryOnLoad);