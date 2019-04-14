window.addEventListener('DOMContentLoaded', function(event) {

    var hero = tns({
        container: '.hero__wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        axis: 'vertical',
        controls: false,
        navPosition: 'bottom',
        speed: 500
    });

    var toggle = document.querySelector('.toggle-menu');
    var header = document.querySelector('.header');
    var modal = document.querySelector('.modal');
    var body = document.body;

    var open_menu = function(event) {
        header.classList.toggle('open');
        toggle.classList.toggle('is-active');
        modal.classList.toggle('active');
        body.classList.toggle('overflow-hidden');
    }

    toggle.addEventListener('click', function(event) { open_menu(event) })
    modal.addEventListener('click', function(event) { open_menu(event) })

});
