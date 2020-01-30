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




