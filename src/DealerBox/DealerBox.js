import React from 'react';
import Cards from '../Cards/Cards';
import Card from '../Cards/Card/Card';
import './DealerBox.css';

export default function DealerBox(props) {
  const result = props.box? props.box.result: null;

  let cards = []
  if (props.box.cards)  {
    if (props.box.cards.length === 2 && props.box.hideCard) {
      const card = props.box.cards[0]
      const value = card.slice(0,-1)
      const suit = card.slice(-1)
      cards.push(
        <div className={`cards`}>
          <Card key={`box-dealer_card-1`} value={value} suit={suit} id={1}/>
          <div className={`card-2 back-card-outer card`}></div> {/* Dealers 2nd card is hiden*/}
        </div>
      )
    } else {
        cards.push(<Cards key={"dealer"} cards={props.box.cards} boxId={"dealer"}/>)
      }
    }   

  return (
    <section className="dealer-section">
    <div id="box-0" className="box">
      { cards }
      { result? <div className="dealer-result">{result}</div>: <div className="dealer-result hidden"></div> }
    </div>
    
  </section>
  )
}