import React from 'react';
import ReactDOM from 'react-dom';
import PlayerBoxes from './PlayerBoxes';

it('renders without errors', () => {
  const div = document.createElement('div');
  const playerBoxes = [
    {
      id: 1,
      open: false, 
      bet: null, 
      cards: [],
      total: null,
      payout: null, 
      stand: null, 
      result: "",
      active: false
    }
  ]
  ReactDOM.render(
    <PlayerBoxes 
      boxes={playerBoxes} 
      handStarted={false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
})