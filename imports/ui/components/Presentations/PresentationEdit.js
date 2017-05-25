import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


class PresentationEdit extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.title.value);
    // console.log(this.presId1.value);
    // console.log(this.presId2.value);
    // console.log(this.presId3.value);
    // console.log(this.notes.value);

    const title = this.title.value;
    Meteor.call('presentations.insert', title, (err) => {
      // console.log('presentations insert meteor call');
      if (err) {
        this.setState({ error: err.reason });
      }
    });
  }

  render() {
    return (
<div>
      <h1>Presentation Edit</h1>
      <h2>Edit Presentation</h2>

      <form onSubmit={this.handleSubmit.bind(this)} className="boxed-view__form">

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
            ref={(complete) => { this.complete = complete; }}/>
            {/* <div class="slider"></div> */}
        </label>
  <br/>

{/* section for inputting the presentation title */}
        <label htmlFor="">Presentation Tile
          <input type="text" placeholder="Input Presentation Tile"
            ref={(title) => { this.title = title; }}/>
        </label>
  <br/>
{/* Toggle switch to see if it is a group project */}
        <label htmlFor="">Group presentation?
          <input type="checkbox" ref={(group) => { this.group = group; }}/>
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
          <input type="textarea" ref={(notes) => { this.notes = notes; }}/>
        </label>
  <br/>
{/* Submit buttons */}
        <button type="submit">Update</button>
        <button type="submit">Delete</button>
      </form>
    </div>

// end of return
    );
// end of render
  }
// end of class
}

export default PresentationEdit;
