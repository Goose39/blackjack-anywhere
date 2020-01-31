import React from 'react';
import TableHeader from './TableHeader/TableHeader'
import DealerBox from '../DealerBox/DealerBox';
import PlayerBoxes from '../PlayerBoxes/PlayerBoxes';
import PlayerControls from '../PlayerControls/PlayerControls';

export default function Table(props) {
  console.log(props.playerBoxes)
  return (
  <>  
    <TableHeader user={props.user} balance={props.balance}/>
    <DealerBox box={props.dealerBox}/>
    <PlayerBoxes boxes={props.playerBoxes} handStarted={props.handStarted}/>
    <PlayerControls deal={props.deal} handStarted={props.handStarted} nextHand={props.nextHand}/>
  </>
  )
}