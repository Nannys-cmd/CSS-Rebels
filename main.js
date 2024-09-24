// main.js
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const opciones = document.querySelector(".opciones");

    navToggle.addEventListener("click", function() {
        opciones.classList.toggle("show-menu");
    });
});
<script>
    window.addEventListener('load', function() {
        document.body.style.visibility = 'visible'
    });
</script>
