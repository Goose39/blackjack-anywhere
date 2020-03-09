import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Card 
      key={`box-1_card-1`} 
      id={1} 
      value={'A'} 
      suit={'d'} 
      boxId={1} 
    />, div);
  ReactDOM.unmountComponentAtNode(div);
})