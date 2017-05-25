import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
// components
import AddSection from './AddSection';
import SectionList from './SectionList';

// collections
// import SectionsCollection from './../../api/sections';

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
