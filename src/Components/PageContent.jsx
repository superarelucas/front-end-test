import React from 'react';
import FeatureSection from './FeatureSection';
import WidgetSection from './WidgetSection';
import ScreenshootSection from './ScreenshootSection';
import FeedbackSection from './FeedbackSection';

const PageContent = () => (
  <div className="page-content-container">
    <FeatureSection />
    <WidgetSection />
    <ScreenshootSection />
    <FeedbackSection />
  </div>
);

export default PageContent;
