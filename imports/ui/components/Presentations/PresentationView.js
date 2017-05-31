import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import { Students } from './PresentationList';
// components

// const renderStudents = function(students) {
//   return students.map()
//     return <p key={students._id}>{students.pres_id}{students.name} is next.</p>
//   };
// };

class PresentationView extends Component {
  render() {
    return (
          <div>
            <h1>GWDA-407</h1>
              <div className="container">
                  <div className="currentPresenter">
                    <h2>Presenting</h2>
                    <h3>Presentation Title</h3>
                    <ul>
                      <li>Name1</li>
                      <li>Name2</li>
                      <li>Name3</li>
                    </ul>
                    <div className="currPresNav">
                      <button>Edit</button>
                      <button>Skip</button>
                      <button>Complete</button>
                    </div>
                    {/* END .currPresNav */}
                  </div>
                  {/* END .currentPresenter */}
                <div className="nextPresenter">
                  <h2>Up Next:</h2>
                  <h2>Presentation Title</h2>
                  <ul>
                    <li>Name1</li>
                    <li>Name2</li>
                    <li>Name3</li>
                  </ul>
                </div>
                {/* END .nextPresenter */}
                <div className="upnextPres">


                </div>
                  {/* END .upnextPres */}

                <div className="comPres">


                </div>


              </div>

            <button>Add Presentation</button>

              {/* END .container */}
            </div>
    );
  }
      }

// const renderPlayers = function() {
//   return [<p key="1">1</p>, <p key="2">2</p>];}

export default PresentationView;
