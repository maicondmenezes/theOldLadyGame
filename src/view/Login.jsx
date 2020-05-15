import '../css/Login.css'
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import GoogleLogin            from 'react-google-login';
import { login, changeValue } from '../store/actions/auth.action';
import Loading                from '../components/Loading/Loading';
import Notify                 from '../components/Notify/Notify';

import ExitToAppIcon          from '@material-ui/icons/ExitToApp';
import ContactMailIcon        from '@material-ui/icons/ContactMail';
import MailIcon               from '@material-ui/icons/Mail';
import withStyles             from '@material-ui/core/styles/withStyles';
import Container              from '@material-ui/core/Container';
import TextField              from '@material-ui/core/TextField';
import Button                 from '@material-ui/core/Button';
import Typography             from '@material-ui/core/Typography';
import Link                   from '@material-ui/core/Link';
import green                  from '@material-ui/core/colors/green';
import CardMedia              from '@material-ui/core/CardMedia';


const responseGoogle = (response) => {
  console.log(response);
}

const ColorButton = withStyles (theme => ({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    '&:hover' : {
      backgroundColor: green[700]
    }
  }
}))(Button)

export class Login extends Component {

  login = () => {
    const { credentials } = this.props;
    this.props.login(credentials).then( () => {

    })
  }
  
  render() {
    return (
      <div>
        <Loading />
        <Notify />
        <Container 
          component = 'main'
          maxWidth = 'xs'
        >      
          <div className = 'mt-3 mt-md-5'>
            <div className = 'text-center'>
              <CardMedia              
                className= 'mt-3 mt-md-4 mb-3 pt-4'
                image = 'https://i.dailymail.co.uk/i/pix/2017/07/18/11/4270A2DA00000578-4706536-image-a-1_1500372917066.jpg'                
                minHeigth = 'xs'
              />
              <Typography
                className = 'mt-3 font-weight-normal'
                component = 'h1'
                variant = 'h6'
              >
                The Most Famous TicTacToe
              </Typography>
            </div>

            <div className = 'mt-4'>
              <TextField             
                id       = 'email'
                name     = 'username'
                type     = 'email'
                label    = 'Login'
                margin   = 'normal'
                value    = {this.props.credentials.username}
                onChange = { (text) => this.props.changeValue({username: text.target.value})}
                required
                fullWidth
              />

              <TextField 
                id           = 'standard-password-input'
                name         = 'password'
                type         = 'password'
                label        = 'Password'
                margin       = 'normal'    
                autoComplete = 'current-password'
                value        = {this.props.credentials.password}  
                onChange     = { (text) => this.props.changeValue({password: text.target.value})}     
                required
                fullWidth
                
              />

              <Button
                type      = 'button'
                variant   = 'contained'
                color     = 'primary'        
                size      = 'large'
                className = 'mb-3 mb-md-4 mt-4'
                startIcon = {<ExitToAppIcon />}
                onClick   = { () => this.login()}
                fullWidth                
              >
                Sign IN
              </Button>
            </div>
          </div>
        </Container>
        
        <div className = 'LoginButons'>
          <div className = 'SignInButton'>
            <Link href = {'/register'}>
              <ColorButton
                type      = 'button'
                variant   = 'contained'
                size      = 'large'
                className = 'mb-3 mb-md-4 mt-4'  
                fullWidth      
                startIcon={<ContactMailIcon />}
              >
                Sign UP
              </ColorButton>
            </Link>
          </div>   
          <div className = 'GoogleLogin'>
            <GoogleLogin
            clientId = '1046602992163-lcg3jivp3la2ekhcsthdftf18ktjrvs7.apps.googleusercontent.com'
            render={renderProps => (
              <Button 
                type = 'button'
                variant = 'contained'
                color = 'inherit'        
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
  }
}

const mapStateToProps = (state) => ({
  credentials: state.authReducer.credentials,
})

const mapDispatchToProps = dispatch =>  ({
  login: (credentials) => dispatch(login(credentials)),
  changeValue: (value) => dispatch(changeValue(value))
})

export default connect ( mapStateToProps, mapDispatchToProps )( Login )