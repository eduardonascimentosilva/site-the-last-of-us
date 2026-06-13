const btnMobile = document.getElementById('btn-mobile');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);