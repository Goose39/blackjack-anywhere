import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards cards={['As', '10h']}/>, div);
  ReactDOM.unmountComponentAtNode(div);
})