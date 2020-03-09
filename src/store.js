// Creates array of all cards. Using number of decks player has selected
export const createShoe = (decks) => {
  const suits = ['h', 'd', 'c', 's']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const shoe = []
  const deck = suits.map(suit => values.map( value => `${value}${suit}`)).flat();

  for (let i=1; i <= decks; i++) {
    shoe.push(deck);
  }
  
  return shoe.flat();
}
// RNG
const randNo = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
 }

 // Shuffles all cards in the shoe
export const shuffle = (shoe) => {
  let newShoe = []
  while (shoe.length > 0)
  {
    const shoeSize = shoe.length 
    const randCardLocation = randNo(shoeSize);
    newShoe.push(shoe[randCardLocation]);
    shoe.splice(randCardLocation, 1);
  }

  return newShoe
}
// Slices cards to get value and symbol 
export const sliceCard = (card) => {
  const cardSymbol = card.slice(0,-1);
  const cardSuit = card[-1];
  
  return { symbol: cardSymbol, suit: cardSuit }
}
// Works out totals of each hands card combination
export const handTotal = (cards) => {
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

  let hasA = false;

  const totals = cards.length > 1 ? 
    cards.map(card => {
      const cardSymbol = card.slice(0,-1);
      const cardValue = cardValues.find(card => card.symbol === cardSymbol)
      if (cardSymbol === "A") {
        hasA = true;
      }
      return cardValue.value
      }) 
    : undefined;

  let sum = totals ? totals.reduce(( a, b ) => a + b): 0;
// Check to convert Aces from 11 to one if total is over 21/bust

  while (sum > 21 && hasA) {
    let aceIndex = totals.indexOf(11);
    if (aceIndex !== -1) {
      // Update A value to 1 instead of orginal 11
      totals[aceIndex] = 1;
      // Recalculate sum with new A value
      sum = totals.reduce(( a, b ) => a + b);
      // Reset Index location of Ace, in order to check for next A
      aceIndex = -1;
    } else hasA = false 
  } 

  return sum
}
