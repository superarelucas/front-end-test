import React, { Component } from 'react';
import FeatureSection from './FeatureSection';
import WidgetSection from './WidgetSection';
import ScreenshootSection from './ScreenshootSection';
import FeedbackSection from './FeedbackSection';

export default class PageContent extends Component {
  render() {
    return (
      <div>
        <FeatureSection />
        <WidgetSection />
        <ScreenshootSection />
        <FeedbackSection />
      </div>
    )
  }
}
