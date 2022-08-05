import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
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
