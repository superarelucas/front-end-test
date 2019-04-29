/**
 * Font Awesome 5*
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Brands
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG'
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble'
import { faBehance } from '@fortawesome/free-brands-svg-icons/faBehance'

// Regular
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'

// Solids
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

library.add(
  faInstagram,
  faFacebookF,
  faBehance,
  faTwitter,
  faGooglePlusG,
  faDribbble,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faEye,
  faHeart,
  faEnvelope
)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()
