import './bootstrap'
import Swiper from 'swiper'
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
})

registerServiceWorker()
