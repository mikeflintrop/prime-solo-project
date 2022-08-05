import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    className="formPanel" onSubmit={login}
    >
    {/* <form className="formPanel" onSubmit={login}> */}
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          {/* Username: */}
          <TextField
            id="outlined-basic"
            label="Username" 
            variant="outlined"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          {/* Password: */}
          <TextField
            id="outlined-basic"
            label="Password" 
            variant="outlined"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button 
        variant="outlined"
        className="btn" 
        type="submit" 
        name="submit" 
        value="Log In"
        >
          LOGIN
        </Button>
      </div>
    {/* </form> */}
    </Box>
  );
}

export default LoginForm;


