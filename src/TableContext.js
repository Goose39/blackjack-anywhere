import React from 'react';

const TableContext = React.createContext( {
  decks: null, 
  dealer: [],
  playerBoxes: [],
  activeBox: {},
  nextCard: () => {},
  hit: () => {},
  stand: () => {},
  surrender: () => {},
  double: () => {},
  addBet: () => {},
  removeBet: () => {}
} )

export default TableContext;