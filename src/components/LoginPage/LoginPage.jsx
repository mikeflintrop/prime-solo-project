// import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




function LoginPage() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(true);
  };


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
        <Snackbar open={true} autoHideDuration={3000} onClose={(event)=>{handleClose}}>

          <Alert onClose={(event)=>{handleClose}} severity="info" sx={{ width: '100%' }}>
            Login to start a workout!
          </Alert>

        </Snackbar>

      </center>
    </div>
  );
}

export default LoginPage;
