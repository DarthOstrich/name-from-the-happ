import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class PresentationEdit extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.presTitle.value);
    console.log(this.presId1.value);
    console.log(this.presId2.value);
    console.log(this.presId3.value);
    console.log(this.addNotes.value);
  }

  render() {
    return (
		<div className="boxed-view">
		  <div className="boxed-view__box">
      <h1>Presentation Edit</h1>
      <h2>Edit Presentation</h2>

      <form onSubmit={this.handleSubmit.bind(this)}>

{/* Toggle switch to see if it is they are present */}
        <label htmlFor="">Attendence (Present/Not Present)
          <input type="checkbox" ref={(present) => {
            this.present = present;
          }}/>
          {/* <div class="slider"></div> */}
        </label>

        <br/>

{/* Toggle switch to see if it is completed */}
        <label htmlFor="">Status (Completed/Not Present)
          <input type="checkbox"
            ref={(completed) => { this.completed = completed; }}/>
            {/* <div class="slider"></div> */}
        </label>
  <br/>
{/* section for inputting the presentation title */}
        <label htmlFor="">Presentation Tile
          <input type="text" placeholder="Input Presentation Tile"
            ref={(presTitle) => { this.presTitle = presTitle; }}/>
        </label>
  <br/>
{/* Toggle switch to see if it is a group project */}
        <label htmlFor="">Group presentation?
          <input type="checkbox" ref={(groupPres) => { this.groupPres = groupPres; }}/>
          {/* <div class="slider"></div> */}
        </label>
  <br/>
{/* section for group Presenters */}
        <label htmlFor="">Presenter(s):
          <input type="text" placeholder="Name 1" ref={(presId1) => { this.presId1 = presId1; }}/>
          <button type="submit">X</button>
          <input type="text" placeholder="Name 2" ref={(presId2) => { this.presId2 = presId2; }}/>
          <button type="submit">X</button>
          <input type="text" placeholder="Name 3" ref={(presId3) => { this.presId3 = presId3; }}/>
          <button type="submit">X</button>
        </label>
  <br/>
{/* section for additional notes */}
        <label htmlFor="">Notes
          <input type="textarea" ref={(addNotes) => { this.addNotes = addNotes; }}/>
        </label>
  <br/>
{/* Submit buttons */}
        <button className="" type="submit">Update</button>
        <button type="submit">Delete</button>
      </form>
    </div>
  </div>
// end of return
    );
// end of render
  }
// end of class
}

export default PresentationEdit;
