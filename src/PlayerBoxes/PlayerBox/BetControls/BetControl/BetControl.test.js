import React from 'react';
import ReactDOM from 'react-dom';
import BetControl from './BetControl';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BetControl />, div);
  ReactDOM.unmountComponentAtNode(div);
})