import '../css/Login.css'
import React, { Component } from 'react';
import { withStyles }       from '@material-ui/core/styles';
import Container            from '@material-ui/core/Container';
import GoogleLogin          from 'react-google-login';
import TextField            from '@material-ui/core/TextField';
import Button               from '@material-ui/core/Button';
import Typography           from '@material-ui/core/Typography';
import Link                 from '@material-ui/core/Link';
import ExitToAppIcon        from '@material-ui/icons/ExitToApp';
import ContactMailIcon      from '@material-ui/icons/ContactMail';
import MailIcon             from '@material-ui/icons/Mail';
import green                from '@material-ui/core/colors/green';

const responseGoogle = (response) => {
  console.log(response);
}

const ColorButton = withStyles (theme => ({
  root: {
    color: '#fff',
    backgroundColor: green[300]
  }
}))

export default props => (  
  <div>
    <Container 
      component = 'main'
      maxWidth = 'xs'
    >
      <div className = 'mt-3 mt-md-5'>
        <div className = 'text-center'>
          <Typography
            className = 'mt-3 font-weight-normal'
            component = 'h1'
            variant = 'h6'
          >
            The Most Famous Game TicTacToe
          </Typography>
        </div>

        <div className = 'mt-4'>
          <TextField 
            id = 'email'
            type = 'email'
            label = 'Login'
            margin = 'normal'
            required
            fullWidth
          />

          <TextField 
            id = 'standard-password-input'
            type = 'password'
            label = 'Password'
            margin = 'normal'           
            required
            fullWidth
            autoComplete = 'current-password'
          />

          <Button
            type = 'button'
            variant = 'contained'
            color = 'secondary'        
            size = 'large'
            className = 'mb-3 mb-md-4 mt-4'
            fullWidth
            startIcon={<ExitToAppIcon />}
          >
            LogIn
          </Button>
        </div>
      </div>
    </Container>
    
    <div className = 'LoginButons'>
      <div className = 'SignInButton'>
      <Button
        type = 'button'
        variant = 'contained'
        color = 'primary'        
        size = 'large'
        className = 'mb-3 mb-md-4 mt-4'  
        fullWidth      
        startIcon={<ContactMailIcon />}
      >
        SignIn
      </Button>      
      </div>   
      <div className = 'GoogleLogin'>
        <GoogleLogin
        clientId = '1046602992163-lcg3jivp3la2ekhcsthdftf18ktjrvs7.apps.googleusercontent.com'
        render={renderProps => (
          <Button 
            type = 'button'
            variant = 'contained'
            color = 'warning'        
            size = 'large'
            className = 'mb-3 mb-md-4 mt-4'
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}   
            fullWidth         
            startIcon={<MailIcon />}
          >
            Google
          </Button>
        )}        
        className = 'GoogleButton'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>     
    </ div>
  </div>
)