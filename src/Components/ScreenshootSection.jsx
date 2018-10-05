import React from 'react';
import screenshootSection from '../assets/screenshoot.png';
import './ScreenshootSection.css';

const ScreenshootSection = () => (
  <div className="screenshot-section-container">
    <img src={screenshootSection} alt="ScreenshootSection" className="screenshot-section-image" />
  </div>
);

export default ScreenshootSection;
