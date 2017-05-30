import React from 'react';

// components

const PresentationView = () => (
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

      </div>
      {/* END .container */}
    </div>
);

export default PresentationView;
