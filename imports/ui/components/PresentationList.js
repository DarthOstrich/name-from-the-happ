import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
// components
// import AddSection from './AddSection';
// import SectionList from './SectionList';
import SectionListItem from './SectionListItem';


// collections
import PresentationsCollections from './../../../api/presentations';


class PresentationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentations: [],
    };
  }
  componentDidMount() {
    this.presentationsTracker = Tracker.autorun(() => {
      Meteor.subscribe('presentationsPub');

      const presentationsCollection = PresentationsCollections.find().fetch();
      this.setState({ presentations: presentationsCollection });
      console.log('PresentationsCollections', this.state.presentations);
    });
  }
  componentWillUnmount() {
    this.presentationsTracker.stop();
  }

  renderSectionListItems() {
    if (this.state.presentations.length === 0) {
      return (
        <div className="">
          <p className="item__status-message">No Sections Found</p>
        </div>
      );
    }
    return this.state.presentations.map((section) => {
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

export default PresentationList;
