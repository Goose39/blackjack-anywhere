import React from 'react';
import ReactDOM from 'react-dom';
import BetControls from './BetControls';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BetControls boxId={1}/>, div); 
  ReactDOM.unmountComponentAtNode(div);
})