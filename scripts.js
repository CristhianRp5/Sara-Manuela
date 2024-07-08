// Función para cambiar a la siguiente imagen
var currentImageIndex = 0; // Variable global para el índice de la imagen actual
var images = [
    'images/SARA3.png',
    'images/SARA2.png',
    'images/SARA3.png',
    'images/SARA4.png',
    'images/SARA20.png',
    'images/SARA6.png',
    'images/SARA7.png',
    'images/SARA8.png',
    'images/SARA9.png',
    'images/SARA10.png'
];

function nextImage() {
    var photoContainer = document.querySelector('.photo-container');
    if (photoContainer) {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Avanza al siguiente índice circularmente
        var nextImageSrc = images[currentImageIndex];
        photoContainer.innerHTML = '<img src="' + nextImageSrc + '" alt="Foto ' + (currentImageIndex + 1) + '" onclick="nextImage()">';
    }
}

// Función para mostrar/ocultar detalles del evento
function showDetails() {
    var details = document.getElementById('details');
    if (details) {
        details.classList.toggle('hidden');
    } else {
        console.error('No se encontró el elemento con ID "details".');
    }
}

// Función para mostrar/ocultar lista de asistencias
function showAsistencias() {
    var asistencias = document.getElementById('asistencias');
    if (asistencias) {
        asistencias.classList.toggle('hidden');
    } else {
        console.error('No se encontró el elemento con ID "asistencias".');
    }
}
