import React from 'react';
import ReactDOM from 'react-dom';
import DeckControl from './DeckControl';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeckControl />, div);
  ReactDOM.unmountComponentAtNode(div);
})