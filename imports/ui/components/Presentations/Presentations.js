import React, { Component } from 'react';
// components
import AddPresentation from './AddPresentation';
import PresentationList from './PresentationList';

class Presentations extends Component {
  render() {
    return (
      <div className="boxed-view">
      <div className="boxed-view__form">
        <PresentationList />
        <AddPresentation />
      </div>
      </div>
    );
  }
}

export default Presentations;
