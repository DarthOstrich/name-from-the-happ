import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import PropTypes from 'prop-types';

import PresentationListItem from './PresentationListItem';
import SectionListItem from './../Sections/SectionListItem';

import AddPresentation from './AddPresentation';


// collections
import PresentationsCollection from './../../../api/presentations';

// components
class PresentationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentations: [],
      sections: [],
    };
  }
  componentDidMount() {
    this.presentationsTracker = Tracker.autorun(() => {
      Meteor.subscribe('presentationsPub');
      const sectionId = Session.get('sectionId');
      console.log(sectionId);
      const presentationsCollection = PresentationsCollection.find({ sectionId }).fetch();
      this.setState({ presentations: presentationsCollection });
      console.log('PresentationsCollection', this.state.presentations);
    });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
    this.sectionsTracker.stop();
  }

  renderPresentationListItems() {
    if (this.state.presentations.length === 0) {
      return (
        <div className="">
          <p className="item__status-message">No Presentations Found</p>
        </div>
      );
    }
    return this.state.presentations.map((presentation) => {
      return <PresentationListItem key={presentation._id} presentation={ presentation } />;
    });
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
        <div>
          <h1>Presentation List</h1>
          <h2>A Dynamic Course Title Here</h2>
          {this.renderPresentationListItems()}
        <AddPresentation />
        </div>
      </div>
    );
  }

}

// I added this in class
PresentationList.propTypes = {
  section: PropTypes.object.isRequired,
};

  // END .container
export default PresentationList;
