
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click',mostrarMenu);

function mostrarMenu(){
    desktopMenu.classList.toggle('inactive');
}