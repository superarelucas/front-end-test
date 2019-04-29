import './bootstrap'
import Swiper from 'swiper'
import { CountUp } from 'countup.js/dist/countup'
import swiperA11y from './utils/swiperA11y'
import { getBreakpoint } from './utils'
import registerServiceWorker from './registerServiceWorker'

$(document).ready(() => {
  const slideFeaturesEl = document.getElementById('features-slide')
  // eslint-disable-next-line no-unused-vars
  const slideFeatures = new Swiper(slideFeaturesEl, {
    a11y: swiperA11y,
    spaceBetween: 30,
    pagination: {
      el: slideFeaturesEl.querySelector('.swiper-pagination')
    },
    breakpointsInverse: true,
    breakpoints: {
      [getBreakpoint('md')]: {
        slidesPerView: 2
      },
      [getBreakpoint('lg')]: {
        slidesPerView: 3
      }
    }
  })

  const slideGalleryEl = document.getElementById('gallery-slide')
  // eslint-disable-next-line no-unused-vars
  const slideGallery = new Swiper(slideGalleryEl, {
    a11y: swiperA11y,
    slidesPerView: 2,
    navigation: {
      el: slideGalleryEl.querySelector('.swiper-navigation')
    },
    breakpointsInverse: true,
    breakpoints: {
      [getBreakpoint('md')]: {
        slidesPerColumn: 2
      },
      [getBreakpoint('lg')]: {
        slidesPerView: 3,
        slidesPerColumn: 2
      },
      [getBreakpoint('xl')]: {
        slidesPerView: 4,
        slidesPerColumn: 2
      }
    }
  })

  const slideTEamEl = document.getElementById('team-slide')
  // eslint-disable-next-line no-unused-vars
  const slideTEam = new Swiper(slideTEamEl, {
    a11y: swiperA11y,
    spaceBetween: 30,
    pagination: {
      el: slideTEamEl.querySelector('.swiper-pagination')
    },
    breakpointsInverse: true,
    breakpoints: {
      [getBreakpoint('md')]: {
        slidesPerView: 2
      },
      [getBreakpoint('lg')]: {
        slidesPerView: 3
      },
      [getBreakpoint('xl')]: {
        slidesPerView: 4
      }
    }
  })

  const animateNumbersListener = () => {
    const section = $('.banner-fun-facts')

    if ($(window).scrollTop() >= section.offset().top) {
      $(window).off('scroll', animateNumbersListener)

      const numbers = [
        { el: 'number-work-hours', val: 3200 },
        { el: 'number-satisfied-clients', val: 120 },
        { el: 'number-projects-delivered', val: 360 },
        { el: 'number-wards-won', val: 42 }
      ]

      numbers.map(count => {
        let countup = new CountUp(count.el, count.val)

        if (!countup.error) {
          countup.start()
        } else {
          console.error(countup.error)
        }
      })
    }
  }

  $(window).on('scroll', animateNumbersListener)
  $(window).on('scroll', () => {
    let toggleNavbarOpacity

    clearTimeout(toggleNavbarOpacity)

    toggleNavbarOpacity = setTimeout(() => {
      if ($(window).scrollTop() > $('.banner-highlight').height()) {
        $('.navbar').removeClass('bg-dark-transparent')
      } else {
        $('.navbar').addClass('bg-dark-transparent')
      }
    }, 250)
  })
})

registerServiceWorker()
