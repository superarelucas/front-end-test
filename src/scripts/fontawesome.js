/**
 * Font Awesome 5*
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Brands
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
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

library.add(
  faFacebookF,
  faBehance,
  faTwitter,
  faGooglePlusG,
  faDribbble,
  faEye,
  faHeart,
  faEnvelope,
  faArrowRight
)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()
