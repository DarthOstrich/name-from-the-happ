import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

// components
// import PresentationList from './PresentationList

// collections
class AddPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      error: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // this.title.focus();
  }

  openModal() {
    // console.log(this.props.section);
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
    const sectionId = Session.get('sectionId');
    const sectionTitle = Session.get('sectionTitle');
    const title = this.title.value;
    Meteor.call('presentations.insert', title, sectionId, sectionTitle, (err) => {
      console.log('presentations insert meteor call', title);
      if (err) {
        this.setState({ error: err.reason });
      }
    });
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="boxed-view__box">
        <button className="button button--pill addPresButton" onClick={ this.openModal }>Add Presentation</button>

        <Modal
          isOpen={ this.state.modalIsOpen }
          contentLabel="Add Presentation"
          onAfterOpen = { () => this.title.focus() }
          onRequestClose={this.closeModal}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal">
        <form className="boxed-view__form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={(title) => { this.title = title; }} />
          <button className="button">Add Presentation</button>
          <br/>
            <button className="button button--default" onClick={this.closeModal}>Cancel</button>
        </form>
      </Modal>

      {/* <PresentationList /> */}

      </div>
    );
  }
}

export default AddPresentation;
