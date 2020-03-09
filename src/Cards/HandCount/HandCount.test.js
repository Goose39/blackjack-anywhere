import React from 'react';
import ReactDOM from 'react-dom';
import HandCount from './HandCount';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HandCount cards={['As', '10d']} />, div);
  ReactDOM.unmountComponentAtNode(div);
})