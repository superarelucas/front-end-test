import React, { Component } from 'react';

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
