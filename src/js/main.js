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


/*
 * Smooth scroll to an element when a internal link is clicked
 */
(function() {
    const links = document.querySelectorAll('a[href*="#"]:not([href="#"])'),
          body = document.querySelector('body');
    
    function initScroll(event) {
        event.preventDefault();

        const target = this.getAttribute('href'),
              distance = scrollModule.getOffset(document.querySelector(target))

        scrollModule.scrollTo(body, distance, 500);
    }

    links.forEach(link => link.addEventListener('click', initScroll));
})();