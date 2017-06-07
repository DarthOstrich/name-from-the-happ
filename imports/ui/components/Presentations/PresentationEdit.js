import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';


// collections
import PresentationsCollection from './../../../api/presentations';

class PresentationEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presentations: [],
      sections: [],
      presentationTitle: '',
    };
  }

  componentDidMount() {
    this.presentationsTracker = Tracker.autorun(() => {
      Meteor.subscribe('presentationsPub');
      Meteor.subscribe('sectionsPub');
      const presentationId = this.props.params._id;
      // console.log('presenation id from params', presentationId);
      const presentationsCollection =
      PresentationsCollection.find({ _id: presentationId }).fetch();
      if (presentationsCollection.length > 0) {
        this.setState(
          {
            presentations: presentationsCollection[0],
            presentationTitle: presentationsCollection[0].title,
          },
        );
        console.log('PresentationsCollection', this.state.presentations);
      }
    });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
    this.sectionsTracker.stop();
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.title.value;
    Meteor.call('presentations.insert', title, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      }
    });
  }

  handleTitleChange(event) {
    const title = event.target.value;
    this.setState({ presentationTitle: title });
  }

  handleDeletePresentation() {
    const { presentation } = this.props;
    this.props.call('presentations.remove', presentationId);
    this.props.browserHistory.push('/presentations');
  }

  handleUpdatePresentation() {
    const { presentation } = this.props;
    this.props.call('presentations.update', presentationId);
    this.props.browserHistory.push('/presentations');
  }


  render() {
    return (
<div className="boxed-view__box boxed-view">

      <form onSubmit={this.handleSubmit.bind(this)} className="boxed-view__form">
        <h1>Presentation Edit</h1>
        <h2>Edit Presentation</h2>

{/* Toggle switch to see if it is they are present */}
        <label>Attendence (Present/Not Present):
        <div className="switch">
          <input type="checkbox" ref={(present) => {
            this.present = present;
          }}/>
          <div className="slider round"></div>
          </div>
        </label>

  <br/>

{/* Toggle switch to see if it is completed */}
        <label>Status (Completed/Not Present):
          <div className="switch">
          <input type="checkbox"
            ref={(complete) => { this.complete = complete; }}/>
            <div className="slider round"></div>
          </div>
        </label>
  <br/>

{/* section for inputting the presentation title */}
        <label htmlFor="">Presentation Title:
          <br />
          <input
            type="text"
            ref={(title) => { this.title = title; }}
            value={this.state.presentationTitle ? this.state.presentationTitle : undefined}
            onChange={this.handleTitleChange.bind(this)}
          />
        </label>
  <br/>
{/* Toggle switch to see if it is a group project */}
        <label>Group presentation?
            <div className="switch">
          <input type="checkbox" ref={(group) => { this.group = group; }} />
          <div className="  slider round"></div>
        </div>
        </label>
  <br/>
{/* section for group Presenters */}
        <label>Presenter(s):
          <br/>
          <input type="text" placeholder="Name 1" ref={(presId1) => { this.presId1 = presId1; }}/>
          <button type="submit" className="button button--danger">X</button>
          <br/>
          <input type="text" placeholder="Name 2" ref={(presId2) => { this.presId2 = presId2; }}/>
          <button type="submit" className="button button--danger">X</button>
            <br/>
          <input type="text" placeholder="Name 3" ref={(presId3) => { this.presId3 = presId3; }}/>
          <button type="submit" className="button button--danger">X</button>
            <br/>
        </label>
  <br/>
{/* section for additional notes */}
        <label>Notes:
          <br />
          <input type="textme" ref={(notes) => { this.notes = notes; }}/>
        </label>
  <br/>
{/* Submit buttons */}
       <button type="submit" className="button button--success"
         onClick={this.handleUpdatePresentation.bind(this)}>Update</button>
        <br/>
        <button type="submit" className="button button--danger"
           onClick={this.handleDeletePresentation.bind(this)}>Delete</button>
      </form>
    </div>

// end of return
    );
// end of render
  }
// end of class
}

PresentationEdit.propTypes = {
  params: PropTypes.object.isRequired,
};


export default PresentationEdit;
