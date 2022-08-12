import React, { useState, useEffect } from 'react';
import './AboutPage.css';

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
            <ul className="noBullets">
              <li>Expand the types of workouts</li>
            </ul>
          <h3>Tech Used</h3>
            <ul className="noBullets">
              <li>React</li>
              <li>Redux</li>
              <li>Redux-Saga</li>
              <li>Node</li>
              <li>Express</li>
              <li>Postgres</li>
              <li>Exercise DB API</li>
              <li>Material UI</li>
              <li>Sweet Alerts 2</li>
              <li>Date-fns</li>
            </ul>
          <h3>Thanks</h3>
            <ul className="noBullets">
              <li>Friends and Family</li>
              <li>Jemisin Cohort</li>
              <li>Instructor Liz</li>
            </ul>
          <h3>LinkedIn</h3>
          <ul className="noBullets">
            <li>
              <a href="https://www.linkedin.com/in/mike-f-a787a8246/">Mike Flintrop</a>
            </li>
          </ul> 
      </div>
    </div>
  );
}

export default AboutPage;
