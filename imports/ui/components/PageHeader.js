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

        <ul className="navi">
          <li><Link to="/presentationview">Presentation View</Link></li>
          <li><Link to="/presentationedit">Presentation Edit</Link></li>
          <li><Link to="/presentationlist">Presentation List</Link></li>
          <li><Link to="/presentationadd">Presentation Add</Link></li>
        </ul>

      </div>
    );
  }
}

export default PageHeader;
