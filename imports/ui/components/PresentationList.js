import React, { Component } from 'react';
import { Link } from 'react-router';

// collections
import { Sections } from './../../api/sections';

class presentationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    };
  }
  componentDidMount() {
    console.log('componentDidMount SetionList');

    this.linksTracker.autorun(() => {
      const links = Sections.find().fetch();
      this.setState({
        links,
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>{this.renderSectionId}</h1>
        <ul>
          <li>Presentation Title</li>
          <li>Presentation Title</li>
        </ul>
        <button><Link to="/presentationadd">Add Presentation</Link></button>
      </div>
   // END .container
  );
  }
}

export default presentationList;
