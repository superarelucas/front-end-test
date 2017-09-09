const sliderModule = (function() {
    'use strict';

    function change(slider, direction) {
        const currentSlider = slider.querySelector('.item.active'),
              prevSlider = currentSlider.previousElementSibling,
              nextSlider = currentSlider.nextElementSibling,
              firstSlider = slider.querySelector('.item:first-child'),
              lastSlider = slider.querySelector('.item:last-child');

        currentSlider.classList.remove('active');

        if (direction === 'prev' && prevSlider) prevSlider.classList.add('active');
        if (direction === 'next' && nextSlider) nextSlider.classList.add('active');
        if (direction == 'prev' && !prevSlider) lastSlider.classList.add('active');
        if (direction == 'next' && !nextSlider) firstSlider.classList.add('active');
    }

    return {
        change
    }
})();