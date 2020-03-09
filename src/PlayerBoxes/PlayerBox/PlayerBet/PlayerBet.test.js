import React from 'react';
import ReactDOM from 'react-dom';
import PlayerBet from './PlayerBet';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerBet />, div);
  ReactDOM.unmountComponentAtNode(div);
})