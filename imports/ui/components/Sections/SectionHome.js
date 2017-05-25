import React, { Component } from 'react';

// components
import PresentationList from './PresentationList';
import AddPresentation from './AddPresentation';

class SectionHome extends Component {
  render() {
    return (
      <div>
        {/* <p>PresentationList Component</p> */}
		<PresentationList />
        {/* <p>AddPresentation Component</p> */}
		<AddPresentation />
      </div>
    );
  }
}

export default SectionHome;
