import React, { Component } from 'react';
// components
import AddPresentation from './AddPresentation';
import PresentationList from './PresentationList';

class Presentations extends Component {
  render() {
    return (
      <div>
        <PresentationList />
        <AddPresentation />
      </div>
    );
  }
}

export default Presentations;
