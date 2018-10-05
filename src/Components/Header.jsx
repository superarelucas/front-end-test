import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import headerBackground from '../assets/first-screen-background.png';
import headerPhoneImage from '../assets/first-screen-phone-image.png';
import downloadButton from '../assets/first-screen-download-button.png';
import featuresButton from '../assets/first-screen-features-button.png';
import funweatherIcon from '../assets/fun-weather-header-icon.png';
import './Header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-background-container">
      <img
        src={headerBackground}
        alt="backgroundImg"
        className="header-background"
      />
    </div>
    <div className="header-content-container">
      <div className="header-top-container">
        <div>
          <img src={funweatherIcon} alt="FUN WEATHER." />
        </div>
        <div className="header-top-links-container">
          {
            //in a true application we would use react router or similar
          }
          {
            /* eslint-disable */
          }
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Reviews</a>
          <a href="#">Download</a>
          {
            /* eslint-enable */
          }
        </div>
        <div className="header-top-social-medias-icons-container">
          <FontAwesomeIcon icon={faFacebookF} onClick={() => {}} />
          <FontAwesomeIcon icon={faInstagram} onClick={() => {}} />
          <FontAwesomeIcon icon={faTwitter} onClick={() => {}} />
        </div>
      </div>
      <div className="header-download-container">
        <div className="header-download-text-container">
          <div className="header-download-text-title">
            Get the most fun weather app
          </div>
          <div className="header-download-text">
            Simple, nice and user-friendly application of the weather. Only useful information
          </div>
          <div className="header-download-buttons">
            <img src={downloadButton} alt="Download" onClick={() => {}} />
            <img src={featuresButton} alt="Features" onClick={() => {}} />
          </div>
        </div>
        <div className="header-download-image-container">
          <img
            src={headerPhoneImage}
            alt="phonePhoto"
            className="header-download-image"
          />
        </div>
      </div>
    </div>

  </div>
);

export default Header;
