import React from 'react';
import feedbackSection from '../assets/feedback.png';
import './FeedbackSection.css';

const FeedbackSection = () => (
  <div className="feedback-section-container">
    <img src={feedbackSection} alt="FeedbackSection" className="feedback-section-image" />
  </div>
);

export default FeedbackSection;
