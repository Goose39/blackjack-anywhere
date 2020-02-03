import React from 'react';
import TableHeader from './TableHeader/TableHeader'
import DealerBox from '../DealerBox/DealerBox';
import PlayerBoxes from '../PlayerBoxes/PlayerBoxes';
import PlayerControls from '../PlayerControls/PlayerControls';
import './Table.css';

export default function Table(props) {
  return (
  <>  
    <TableHeader user={props.user} balance={props.balance}/>
    <DealerBox box={props.dealerBox} hideCard={props.hideCard} />
    <PlayerBoxes boxes={props.playerBoxes} handStarted={props.handStarted}/>
    <PlayerControls deal={props.deal} handStarted={props.handStarted} nextHand={props.nextHand} resetBalance={props.resetBalance}/>
  </>
  )
}