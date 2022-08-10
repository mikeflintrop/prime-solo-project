import React, { useState, useEffect } from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const [heading, setHeading] = useState('About');

  return (
    <div className="container">
        <h2>{heading}</h2>
      <div>
        <div>
          <img src="images/steelcore_main.jpeg" alt="steelcore_main" />
        </div>
        <p>TODO:
          Fill in this page with info about the APP!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
