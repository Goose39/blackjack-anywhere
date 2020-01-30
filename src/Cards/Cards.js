import React from 'react';
import Card from './Card/Card';
import HandCount from './HandCount/HandCount'
import './Cards.css';

export default function Cards(props) {
  const cards = props.cards ? 
    props.cards.map((card, i) => {
      const cardId = i + 1;
      const value = card.slice(0,-1)
      const suit = card.slice(-1)
      return <Card key={`box-${props.boxId}_card-${cardId}`} id={i+1} value={value} suit={suit}/>
    }) 
    : null;

  return (
    <>
      { cards ? <HandCount cards={props.cards}/> : null}
      <div className={`cards${props.active? ' active': ''}`}>
        { cards }
      </div>
    </>
  );
}