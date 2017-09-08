// Mobile menu
const hamburger = document.querySelector('.hamburger-menu'),
      mobileMenu = document.querySelector('.menu-mobile');

function toggleMenu() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);