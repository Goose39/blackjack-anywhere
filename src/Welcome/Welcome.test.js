import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});