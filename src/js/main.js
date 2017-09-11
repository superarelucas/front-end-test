/**
 * Mobile menu toggle
 */
(function() {
    const hamburger = document.querySelector('.hamburger-menu'),
          mobileMenu = document.querySelector('.menu-mobile'),
          menuLinks = mobileMenu.querySelectorAll('.item');
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('stop-scrolling');
    }
    
    hamburger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
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


/**
 * Parallax effect
 */
(function() {
    const body = document.querySelector('body'),
          header = document.querySelector('header.header'),
          headerHeight = header.clientHeight,
          headerBubbles = header.querySelectorAll('.weather-bubble'),
          screenshots = document.querySelectorAll('.screenshot-app');
          
    function scroll() {
        let scroll = body.scrollTop.toString();

        // Header parallax        
        if (scroll <= headerHeight) {
            header.style = `
                background-position: 
                    center ${scroll / 30 + 100}%,
                    center bottom;
            `;

            headerBubbles.forEach((bubble, index) => {
                bubble.style.transform = `translate3d(0, -${scroll / (index + 2)}%, 0)`;
            });
        }

        // Screenshot parallax        
        screenshots.forEach(screenshot => {
            const screenshotHeight = screenshot.clientHeight + 500,
                  screenshotOffset = scrollModule.getOffset(screenshot) - 550,
                  screenshotBubbles = screenshot.querySelectorAll('.weather-bubble'),
                  backgroundText = screenshot.querySelector('.background-text');

            const screenshotArea = screenshotHeight + screenshotOffset;

            if (scroll > screenshotOffset && scroll <= screenshotArea) {
                screenshotBubbles.forEach((bubble, index) => {
                    bubble.style.transform = `translate3d(0, -${(scroll - screenshotOffset) / (index + 7)}%, 0)`;
                });

                backgroundText.style.transform = 
                    `translate3d(-50%, ${(scroll - screenshotOffset) / 40 - 50}%, 0) rotate(90deg)`;
            }
        });
    }

    window.addEventListener('scroll', scroll);
})();


/**
 * Image slider
 */
(function() {
    const slider = document.querySelector('.slider-image'),
          sliderItems = slider.querySelectorAll('.item'),
          controls = slider.parentNode.querySelectorAll('.control');
    
    sliderItems[1].classList.add('active');
    
    
    function switchSlider(event) {
        event.preventDefault();
        
        const direction = this.getAttribute('data-control');
        sliderModule.change(slider, direction);
    }
    
    controls.forEach(control => control.addEventListener('click', switchSlider));
})();


/**
 * Load comments
 */
const commentsURL = fetch('https://jsonplaceholder.typicode.com/comments');

commentsURL
    .then(data => data.json())
    .then(data => {
        loadComments(data);
    })
    .catch(err => console.log(err));

function loadComments(data) {
    const comments = data
        .filter((comment, index) => index < 4)
        .map(comment => comment);
    
    commentModule.render(comments);
}