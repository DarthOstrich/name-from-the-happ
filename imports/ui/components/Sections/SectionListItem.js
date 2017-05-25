import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

class SectionListItem extends Component {
  // console.log('section', this.props.section);
  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.section._id;
    Session.set('currentSectionId', id);
    browserHistory.push(`/sections/${id}`);
  }
  handleDelete() {
    const id = this.props.section._id;
    // console.log(id);
    Meteor.call('sections.remove', id, (err) => {
      // console.log('sections remove meteor call');
      if (err) {
        this.setState({ error: err.reason });
      }
    });
  }
  render() {
    return (
      <div className="item">
        <div className="section">
          <div onClick={this.handleClickItem.bind(this)}>
            <h2>{this.props.section.title}</h2>
          </div>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
      </div>
    );
  }
}

SectionListItem.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionListItem;
