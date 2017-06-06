import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
// import PropTypes from 'prop-types';
import PresentationListItem from './PresentationListItem';
import PresentationSectionName from './PresentationSectionName';
import SectionsCollection from './../../../api/sections';
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
      Meteor.subscribe('sectionsPub');
      const sectionId = Session.get('sectionId');
      const sectionTitle = Session.get('sectionTitle');
      const sectionsCollection = SectionsCollection.find().fetch();
      this.setState({ sections: sectionsCollection });
      console.log('SectionsCollection', this.state.sections);
      // console.log(sectionId);
      const presentationsCollection =
      PresentationsCollection.find({ sectionId, sectionTitle }).fetch();
      this.setState({ presentations: presentationsCollection });
      console.log('PresentationsCollection', this.state.presentations);
    });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
    this.sectionsTracker.stop();
  }

  renderPresentationListItems() {
    return this.state.presentations.map((presentation) => {
      return <PresentationListItem key={presentation._id} presentation={ presentation } />;
    });
  }

  renderSectionName() {
    if (this.state.presentations.length === 0) {
      return (
        <div className="">
          <p className="">No Presentations Found</p>
        </div>
      );
    }
    return this.state.presentations.map((presentation) => {
      return <PresentationSectionName key={presentation.sectionTitle} presentation={ presentation } />;
    });
  }

  render() {
    return (
      <div className="boxed-view__box">
        <div className="">
          <div className="preslistheader">
            {this.renderSectionName()}
            <h3>Presentation List</h3>
          </div>
          {this.renderPresentationListItems()}
        </div>
      </div>
    );
  }

}

  // END .container
export default PresentationList;
