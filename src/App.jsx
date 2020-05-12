import './css/App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GameScreen from './layout/GameScreen';

export default props => (
  <Provider store = {store}>
    <div className = 'App'>    
      <GameScreen title = '-The Old Lady Game-' />
    </div>
  </Provider>
)
