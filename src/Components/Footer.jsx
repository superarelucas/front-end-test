import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import funweatherIcon from '../assets/fun-weather-footer-icon.png';
import downloadFooter from '../assets/download.png';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="download-footer-container">
      <img src={downloadFooter} alt="Footer" className="download-footer-image" />
    </div>
    <div className="footer-bottom-container">
      <div>
        <img src={funweatherIcon} alt="FUN WEATHER." />
      </div>
      <div className="footer-bottom-links-container">
        {
          /* eslint-disable */
          //in a true application we would use react router or similar
        }
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Reviews</a>
        <a href="#">Download</a>
        {
          /* eslint-enable */
        }
      </div>
      <div className="footer-bottom-social-medias-icons-container">
        <FontAwesomeIcon icon={faFacebookF} onClick={() => {}} />
        <FontAwesomeIcon icon={faInstagram} onClick={() => {}} />
        <FontAwesomeIcon icon={faTwitter} onClick={() => {}} />
      </div>
    </div>
    <div className="footer-copyright-container">
      <p className="footer-copyright-text">
        © 2016 All rights reserved. Weather App Theme by Gravpix
      </p>
      <div className="footer-bottom-go-top-column" onClick={() => scroll.scrollTo(0)}>
        <div className="footer-bottom-go-top-button">
          <FontAwesomeIcon color="#A5A5B9" icon={faChevronUp} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
