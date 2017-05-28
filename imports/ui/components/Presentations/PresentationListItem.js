import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Meteor } from 'meteor/meteor';

import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

class PresentationListItem extends Component {
  // console.log('presentation', this.props.presentation);
  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.presentation._id;
    Session.set('currentPresentationsId', id);
    browserHistory.push('/PresentationEdit/');
  }

  // handleDelete() {
  //   const id = this.props.presentation._id;
  //   // console.log(id);
  //   Meteor.call('presentations.remove', id, (err) => {
  //     // console.log('presentations remove meteor call');
  //     if (err) {
  //       this.setState({ error: err.reason });
  //     }
  //   });
  // }
  render() {
    return (
      <div className="item">
        <div className="presentation">
          <div>
            <h2>{this.props.presentation.title}</h2>
          </div>
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
