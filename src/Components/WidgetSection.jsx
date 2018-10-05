import React from 'react';
import widgetSection from '../assets/widgets.png';
import './WidgetSection.css';

const WidgetSection = () => (
  <div className="widget-section-container">
    <img src={widgetSection} alt="WidgetSection" className="widget-section-image" />
  </div>
);

export default WidgetSection;
