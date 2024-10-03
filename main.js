// Asegúrate de que este script se ejecute después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const opciones = document.querySelector('.opciones');

    navToggle.addEventListener('click', () => {
        opciones.classList.toggle('show-menu');
    });
});
