import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

class PresentationListItem extends Component {
  // console.log('presentation', this.props.presentation);
  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.presentation._id;
    Session.set('currentPresentationsId', id);
    browserHistory.push(`/presentations/${id}`);
  }
  handleDelete() {
    const id = this.props.presentation._id;
    // console.log(id);
    Meteor.call('presentations.remove', id, (err) => {
      // console.log('presentations remove meteor call');
      if (err) {
        this.setState({ error: err.reason });
      }
    });
  }
  render() {
    return (
      <div className="item">
        <div className="presentation">
          <div onClick={this.handleClickItem.bind(this)}>
            <h2>{this.props.presentation.title}</h2>
          </div>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
      </div>
    );
  }
}

PresentationListItem.propTypes = {
  presentation: PropTypes.object.isRequired,
};

export default PresentationListItem;
