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
          <h3>Next Steps</h3>
            <ul>
              <li>Expand the types of workouts</li>
            </ul>
          <h3>Tech Used</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Redux-Saga</li>
              <li>Node</li>
              <li>Express</li>
              <li>Postgres</li>
              <li>Material UI</li>
              <li>Sweet Alerts 2</li>
              <li>Date-fns</li>
            </ul>
          <h3>Thank You</h3>
            <ul>
              <li>My Family and Friends</li>
              <li>Jemisin Cohort</li>
              <li>Instructor Liz</li>
            </ul>
      </div>
    </div>
  );
}

export default AboutPage;
