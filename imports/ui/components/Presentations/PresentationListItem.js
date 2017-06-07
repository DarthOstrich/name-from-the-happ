import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Meteor } from 'meteor/meteor';

import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

class PresentationListItem extends Component {

  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.presentation._id;
    Session.set('presentationsId', id);
    browserHistory.push('/PresentationEdit/');
  }
  render() {
    return (
      <div className="item">
        <div className="presentation">
            <h2>{this.props.presentation.title}</h2>
            <button onClick={this.handleClickItem.bind(this)}>Edit</button>
        </div>
      </div>
    );
  }
}

PresentationListItem.propTypes = {
  presentation: PropTypes.object.isRequired,
};

export default PresentationListItem;
