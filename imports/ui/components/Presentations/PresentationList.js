import React from 'react';
import { Link } from 'react-router';

// components

const presentationList = () => (
  <div className="container">
    <h1>GWDA407</h1>
    <ul>
      <li>Presentation Title</li>
      <li>Presentation Title</li>
    </ul>
    <button><Link to="/presentationadd">Add Presentation</Link></button>
  </div>
  // END .container
);

export default presentationList;
