import React from 'react';
import ReactDOM from 'react-dom';
import DealerBox from './DealerBox';

it('renders without errors', () => {
  const div = document.createElement('div');

  const dealerBox = {
    cards: [],
    total: null,
    result: "",
    hideCard: true
  }
  ReactDOM.render(
    <DealerBox 
      box={dealerBox} 
      hideCard={dealerBox.hideCard} 
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});