// Seleccionamos el botón y el menú
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.opciones');

// Evento de clic para alternar el menú
navToggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
