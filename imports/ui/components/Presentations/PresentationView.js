import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import { Students } from './PresentationList';
import PresentationListItem from './PresentationListItem';
// components


//collections

import PresentationsCollection from './../../../api/presentations';

// const renderStudents = function(students) {
//   return students.map()
//     return <p key={students._id}>{students.pres_id}{students.name} is next.</p>
//   };
// };

class PresentationView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        presentations: [],
        section: [],
      };
    }

  componentDidMount() {
  this.presentationsTracker = Tracker.autorun(() => {
    Meteor.subscribe('presentationsId');
    const presentationsId = Session.get('presentationsId');
    console.log(presentationsId);
    const presentationsCollection = PresentationsCollection.find({ presentationsId }).fetch();
    this.setState({ presentations: presentationsId });
    console.log('PresentationsCollection', this.state.presentations);
  });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
    this.sectionsTracker.stop();
  }

  renderPresentationListItems() {
    if (this.state.presentations.length === 0) {
      return (
        <div className="">
          <p className="item__status-message">No Presentations Found</p>
        </div>
      );
    }
    return this.state.presentations.map((presentation) => {
      return <PresentationListItem key={presentation._id} presentation={ presentation }/>;
    });
  }


  render() {
    return (
          <div className="boxed-view__form">
            <h1>GWDA-407</h1>
              <div className>
                  <div className>
                    <h2>Presenting</h2>
                    {this.renderPresentationListItems()}
                    <h3>Presentation Title</h3>
                    <ul>
                    </ul>
                    <div className="currPresNav">
                      {this.renderPresentationListItems()}
                      <button className="button--pill">Edit</button>
                      <button className="button--pill">Skip</button>
                      <button className="button--pill">Complete</button>
                    </div>
                    {/* END .currPresNav */}
                  </div>
                  {/* END .currentPresenter */}
                <div className="nextPresenter">
                  <h2>Up Next:</h2>
                  {this.renderPresentationListItems()}
                  <h2>Presentation Title</h2>
                  <ul>

                  </ul>
                </div>
                {/* END .nextPresenter */}
                <div className="upnextPres">


                </div>
                  {/* END .upnextPres */}

                <div className="comPres">


                </div>


              </div>

            <button className="$brand-primary">Add Presentation</button>

              {/* END .container */}
            </div>
    );
  }
      }

// const renderPlayers = function() {
//   return [<p key="1">1</p>, <p key="2">2</p>];}

export default PresentationView;
