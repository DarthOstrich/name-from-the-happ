import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

class PresentationSectionName extends Component {

  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.presentation._id;
    Session.set('currentPresentationsId', id);
    browserHistory.push('/PresentationEdit/');
    const sectionTitle = this.props.presentation.Title;
    Session.set('sectionTitle', sectionTitle);
    const currentSectionTitle = Session.get('sectionTitle');
    browserHistory.push(`/sections/${sectionTitle}`);
    console.log('sectionTitle', currentSectionTitle);
  }
  render() {
    return (
      <div className="item">
        <div className="presentation">
          <div>
            <h2>{this.props.presentation.sectionTitle}</h2>
          </div>
        </div>
      </div>
    );
  }
}

PresentationSectionName.propTypes = {
  presentation: PropTypes.object.isRequired,
};

export default PresentationSectionName;
