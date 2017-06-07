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
    const title = this.props.section.title;
    Session.set('sectionId', id);
    Session.set('sectionTitle', title);
    const currentSectionId = Session.get('sectionId');
    const currentSectionTitle = Session.get('sectionTitle');
    browserHistory.push(`/sections/${id}`);
    browserHistory.push(`/sections/${title}`);
    console.log('sectionId', currentSectionId);
    console.log('sectionTitle', currentSectionTitle);
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
      <div className="item item__name item-section">
        <div className="section">
          <div onClick={this.handleClickItem.bind(this)}>
            <h2>{this.props.section.title}</h2>
          </div>
          <button onClick={this.handleDelete.bind(this)}>Edit</button>
        </div>
      </div>
    );
  }
}

SectionListItem.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionListItem;
