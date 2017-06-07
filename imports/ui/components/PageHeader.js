import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
// import { onAuthChange } from './../../startup/client/routes';
import { Link } from 'react-router';

class PageHeader extends Component {
  handleLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-logo">
            <h1><Link to="/">Name From The Happ</Link></h1>
          </div>
          <div className="header-user">
            <button className="log" onClick={this.handleLogout.bind(this)}>Logout</button>
          </div>
        </header>

        <ul>
          <li><Link to="/presentationview">PresentationView</Link></li>
          <li><Link to="/presentationedit">PresentationEdit</Link></li>
          <li><Link to="/presentationlist">PresentationList</Link></li>
          <li><Link to="/presentationadd">PresentationAdd</Link></li>
        </ul>

      </div>
    );
  }
}

export default PageHeader;
