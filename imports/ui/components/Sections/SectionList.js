import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
// components
// import AddSection from './AddSection';
// import SectionList from './SectionList';
import SectionListItem from './SectionListItem';


// collections
import SectionsCollection from './../../../api/sections';


class SectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }
  componentDidMount() {
    this.sectionsTracker = Tracker.autorun(() => {
      Meteor.subscribe('sectionsPub');

      const sectionsCollection = SectionsCollection.find().fetch();
      this.setState({ sections: sectionsCollection });
      console.log('SectionsCollection', this.state.sections);
    });
  }

  componentWillUnmount() {
    this.sectionsTracker.stop();
  }

  renderSectionListItems() {
    if (this.state.sections.length === 0) {
      return (
        <div className="">
          <p className="item__status-message">No Sections Found</p>
        </div>
      );
    }
    return this.state.sections.map((section) => {
      return <SectionListItem key={section._id} section={ section } />;
    });
  }

  render() {
    return (
      <div>
        {this.renderSectionListItems()}
      </div>
    );
  }
}

export default SectionList;
