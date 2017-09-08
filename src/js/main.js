// Mobile menu
(function() {
    const hamburger = document.querySelector('.hamburger-menu'),
          mobileMenu = document.querySelector('.menu-mobile');
    
    function toggleMenu() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }
    
    hamburger.addEventListener('click', toggleMenu);
})();


/*
 * Add 'loaded' class to the body tag after page load
 */
(function() {
    const body = document.querySelector('body');

    function loadAnimation() {
        setTimeout(() => body.classList.add('loaded'), 100);
    }

    window.addEventListener('load', loadAnimation);
})();