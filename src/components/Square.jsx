import './css/Square.css';
import React from 'react';
import Button from '@material-ui/core/Button';

export default props =>
  <Button 
    variant={props.playerSimbol ? 'contained' : 'outlined'}
    color={props.playerSimbol === 'X' ? 'primary' : 'secondary'} 
    className ='square'      
    onClick   ={props.onClick}
  >          
    {props.playerSimbol}
  </Button>