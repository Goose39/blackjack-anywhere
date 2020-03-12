import React from 'react';
import ReactDOM from 'react-dom';
import PlayerControls from './PlayerControls';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerControls 
    deal={() => {}} 
    handStarted={false} 
    nextHand={() => {}} 
    resetBalance={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});