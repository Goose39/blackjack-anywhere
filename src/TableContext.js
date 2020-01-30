import React from 'react';

const TableContext = React.createContext( {
  decks: null, 
  dealer: [],
  playerBoxes: [],
  activeBox: {},
  nextCard: () => {},
  hit: () => {},
  stand: () => {},
  split: () => {},
  surrender: () => {},
  double: () => {},
  deal: () => {},
  payout: () => {},
  addBet: () => {},
  removeBet: () => {}
} )

export default TableContext;