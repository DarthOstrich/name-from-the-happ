import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import PresentationListItem from './PresentationListItem';
import AddPresentation from './AddPresentation';

// collections
import PresentationsCollection from './../../../api/presentations';

// components
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
      // console.log('yo');
      const presentationsCollection = PresentationsCollection.find().fetch();
      this.setState({ presentations: presentationsCollection });
      console.log('PresentationsCollection', this.state.presentations);
    });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
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

  render() {
    return (
      <div>
        {this.renderPresentationListItems()}
        <AddPresentation />
      </div>
    );
  }

}

  // END .container
export default PresentationList;
