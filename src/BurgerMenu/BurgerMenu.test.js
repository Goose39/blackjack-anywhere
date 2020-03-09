import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from './BurgerMenu';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BurgerMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
})