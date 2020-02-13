import React from 'react';
import './DeckControl.css';

export default function DeckControl(props) {
  return (
  <div className={`deck_control${props.addClass? props.addClass: "" }`}>
    <label htmlFor='decks'>Decks in play: </label>
    <input className="deckInput" id="decks" type="number" step="1" max="25" min="1" value={props.decks} onChange={e => props.updateDecks(e.target.value)} />
  </div>
  )
}