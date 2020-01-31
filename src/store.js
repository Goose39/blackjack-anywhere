export const CreateShoe = (decks) => {
  const suits = ['h', 'd', 'c', 's']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const shoe = []
  const deck = suits.map(suit => values.map( value => `${value}${suit}`)).flat();

  for (let i=1; i <= decks; i++) {
    shoe.push(deck);
  }
 
  return shoe.flat();
}

export const randomizeShoe = () => {

}

export const sliceCard = (card) => {
  
}

export const HandTotal = (cards) => {
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

  const totals = cards.length > 1 ? 
    cards.map(card => {
      const cardSymbol = card.slice(0,-1);
      const cardValue = cardValues.find(card => card.symbol === cardSymbol)
      return cardValue.value
      }) 
    : undefined;

  const sum = totals ? totals.reduce(( a, b ) => a + b): 0;
  return sum
}


