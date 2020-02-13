import React from 'react';
import DeckControl from '../Table/TableHeader/DeckControl/DeckControl'
import './BurgerMenu.css'

export default function BurgerMenu(props) {
  return (
    <div className='BurgerMenu'>
      <DeckControl decks={props.decks} updateDecks={props.updateDecks} addClass=' burger'/>
    </div>
  )
}

