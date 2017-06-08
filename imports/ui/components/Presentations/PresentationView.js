import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import { Students } from './PresentationList';
import PresentationListItem from './PresentationListItem';

// components


//collections

import PresentationsCollection from './../../../api/presentations';

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
    console.log(this.props.params._id);
    const _id = this.props.params._id;
    Meteor.subscribe('presentationsPub');
    // console.log(presentationsId);
    const presentationsCollection = PresentationsCollection.find({ sectionId: _id }).fetch();
    console.log(PresentationsCollection);

    this.setState({ presentations: presentationsCollection });
    // console.log('PresentationsCollection', this.state.presentations);
  });
  }

  componentWillUnmount() {
    this.presentationsTracker.stop();
    // this.sectionsTracker.stop();
  }

  // renderPresentationListItems() {
  //   if (this.state.presentations.length === 0) {
  //     return (
  //       <div className="">
  //         <p className="item__status-message">No Presentations Found</p>
  //       </div>
  //     );
  //   }
  //   return this.state.presentations.map((presentation) => {
  //     return <PresentationListItem key={presentation._id} presentation={ presentation }/>;
  //   });
  // }

  handleClickItem() {
    // console.log('handleClickItem');
    const id = this.props.section._id;
    const title = this.props.section.title;
    // Session.set('presentationId', id);
    // Session.set('presentationTitle', title);
    // const currentSectionId = Session.get('presentationId');
    // const currentSectionTitle = Session.get('presentationTitle');
    // browserHistory.push(`/presentation/${id}`);
    // browserHistory.push(`/presentation/${title}`);
    // console.log('presentationId', currentSectionId);
    // console.log('presentationTitle', currentSectionTitle);
  }


  render() {
    return (
          <div className="boxed-view__form">
            <h1>GWDA-407</h1>
              <div className>
                  <div className>
                    <h2>Presenting</h2>
                      <div onClick={this.handleClickItem.bind(this)}>
                      </div>
                    <h3>{this.state.presentations[0] ? this.state.presentations[0].title : undefined}</h3>
                    <ul>
                    </ul>
                    <div className="currPresNav">
                      <button className="button--pill">Edit</button>
                      <button className="button--pill">Skip</button>
                      <button className="button--pill">Complete</button>
                    </div>
                    {/* END .currPresNav */}
                  </div>
                  {/* END .currentPresenter */}
                <div className="nextPresenter">
                  <h2>Up Next:</h2>
                    <h3>{this.state.presentations[1] ? this.state.presentations[1].title : undefined}</h3>
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
