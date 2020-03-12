import React from 'react';
import PlayerBox from './PlayerBox/PlayerBox';
import './PlayerBoxes.css';


export default function PlayerBoxes(props) {
  const boxes = props.boxes[0] !== undefined ? 
    props.boxes.map((box, i) => {
      const boxNo = i + 1;

      const cards = box.cards ? box.cards : undefined;

      return <PlayerBox 
              key={`box-${boxNo}`} 
              boxId={boxNo} 
              cards={cards} 
              bet={box.bet}
              result={box.result}
              handStarted={props.handStarted}
              open={box.open}
              active={box.active}
            />
    }) 
    : null;

  return (
    <section className="player-section">
    <div className="player-boxes">
     { boxes }
    </div>
  </section>
  );
};