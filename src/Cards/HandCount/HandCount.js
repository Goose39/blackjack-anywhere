import React from 'react'

export default function HandCount(props) {
  const cardValues = [
    {symbol: '2', value: 2},
    {symbol: '3', value: 3},
    {symbol: '4', value: 4},
    {symbol: '5', value: 5},
    {symbol: '6', value: 6},
    {symbol: '7', value: 7},
    {symbol: '8', value: 8},
    {symbol: '9', value: 9},
    {symbol: '10', value: 10},
    {symbol: 'J', value: 10},
    {symbol: 'Q', value: 10},
    {symbol: 'K', value: 10},
    {symbol: 'A', value: 11}
  ]

  const totals = props.cards.length > 1 ? props.cards.map(card => {
    const cardSymbol = card.slice(0,-1);
    const cardValue = cardValues.find(card => card.symbol === cardSymbol)
    return cardValue.value
  }) : null;
  const sum = totals ? totals.reduce(( a, b ) => a + b): 0;
  const handCount = sum > 0 ? <div className="hand-count">{sum}</div> : null;
  return (
    <>
      { handCount }
    </>
  )
}