import './Square.css'
import React from 'react'

export default props =>
  <button 
    className ='square'      
    onClick   ={props.onClick}
  >          
    {props.playerSimbol}
  </button>