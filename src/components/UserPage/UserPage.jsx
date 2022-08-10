import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const returnToNewWorkout = () => {
    history.push('/new');
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>
        <Button 
            variant="outlined" 
            size="large"
            color="success"
            onClick={returnToNewWorkout}
            > Start New Workout!
        </Button>
      </div>
      <div>

      </div>
      <div className="user-image">
        <img src="images/steelcore_main.jpeg" alt="steelcore_main" />
      </div>
      <div>
        <LogOutButton className="btn" />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
