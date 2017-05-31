import React, { Component } from 'react';

// components
import PresentationList from './PresentationList';
import AddPresentation from './AddPresentation';

class SectionHome extends Component {
  render() {
    return (
      <div>
        <PresentationList />
        <AddPresentation />
      </div>
    );
  }
}

export default SectionHome;
