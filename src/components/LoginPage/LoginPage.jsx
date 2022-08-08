// import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div>
        <img src="images/steelcore_main.jpeg" alt="steelcore_main" />
      </div>
      <LoginForm />

      <center>
      <Button 
        variant="contained"
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/registration');
        }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
