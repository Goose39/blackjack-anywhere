import React from 'react';
import Cards from '../../Cards/Cards'
import PlayerBet from './PlayerBet/PlayerBet';
import BetControls from './BetControls/BetControls'
import './PlayerBox.css';

export default class PlayerBox extends React.Component {
  render() {
    console.log(this.props.cards)
    return (
      <div id={`box-${this.props.boxId}`} className="box">
        { this.props.cards ? <Cards cards={this.props.cards} boxId={this.props.boxId}/> : null}
        <PlayerBet bet={this.props.bet} boxId={this.props.boxId}/>
        { this.props.result? <div className="result">{this.props.result}</div> : null}
        { !this.props.handStarted ? <BetControls boxId={this.props.boxId}/>: null}
      </div>
    )
    }
}