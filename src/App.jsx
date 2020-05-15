import './css/App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GameScreen from './view/GameScreen';
import Login from './view/Login';
import Register from './view/Register';

function App() {
  return(
    <Provider store = {store}>
      <div className = 'App'>    
        <Register />      
      </div>
    </Provider>
  );  
}

export default App;
