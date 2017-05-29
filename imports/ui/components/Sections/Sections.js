import React, { Component } from 'react';
// components
import AddSection from './AddSection';
import SectionList from './SectionList';

class Sections extends Component {
  render() {
    return (
      <div>
        <SectionList />
        <AddSection />
      </div>
    );
  }
}

export default Sections;
