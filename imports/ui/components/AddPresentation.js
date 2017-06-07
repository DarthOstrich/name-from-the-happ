import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddPresentation extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.presTitle.value);
    console.log(this.PresenterA.value);
    console.log(this.PresenterB.value);
    console.log(this.PresenterC.value);
    console.log(this.PresenterD.value);
    console.log(this.addNotes.value);
  }

  render() {
    return (
        <div>
          <h1>New Presentation</h1>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <label htmlFor="">Presentation Title
              <input type="text" name="Title" placeholder="Input Presentation Title"
                ref={(presTitle) => { this.presTitle = presTitle; }} />
            </label>

            <label htmlFor="">Group presentation?
              <input type="checkbox" ref={(groupPres) => { this.groupPres = groupPres; }}/>
              {/* <div class="slider"></div> */}
            </label>

            <label htmlFor="">Presenter(s)
              <input type="text" name="name" placeholder="Name 1"
                ref={(PresenterA) => { this.PresenterA = PresenterA; }}/>
              <input type="text" name="name" placeholder="Name 2"
                ref={(PresenterB) => { this.PresenterB = PresenterB; }}/>
              <input type="text" name="name" placeholder="Name 3"
                ref={(PresenterC) => { this.PresenterC = PresenterC; }}/>
              <input type="text" name="name" placeholder="Name 4"
                ref={(PresenterD) => { this.PresenterD = PresenterD; }}/>
            </label>

            <label htmlFor="">Notes
              <input type="textarea" ref={(addNotes) => { this.addNotes = addNotes; }}/>
            </label>

            <button>Add Presentation</button>
          </form>
        </div>

    );
  }
  }

export default AddPresentation;
