import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

// collections


class AddSection extends Component {
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
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('handleSubmit');

    const title = this.title.value;

    Meteor.call('sections.insert', title, (err) => {
      // console.log('sections insert meteor call');
      if (err) {
        this.setState({ error: err.reason });
      }
    });
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="button button--pill" onClick={ this.openModal }>Add Class</button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          contentLabel="Add Class"
          onAfterOpen={ () => this.title.focus() }
          onRequestClose={this.closeModal}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
        <form className="boxed-view__form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={(title) => { this.title = title; }} />
          <button className="button">Add Section</button>
        </form>
        <button className="button button--default" onClick={this.closeModal}>Cancel</button>
      </Modal>
      </div>
    );
  }
}

export default AddSection;
