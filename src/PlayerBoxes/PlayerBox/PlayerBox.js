import React from 'react';
import Cards from '../../Cards/Cards'
import PlayerBet from './PlayerBet/PlayerBet';
import BetControls from './BetControls/BetControls'
import './PlayerBox.css';

export default class PlayerBox extends React.Component {
  render() {
    return (
      <div id={`box-${this.props.boxId}`} className="box">
        { this.props.cards ? <Cards cards={this.props.cards} boxId={this.props.boxId} active={this.props.active} /> : null}
        <PlayerBet bet={this.props.bet} boxId={this.props.boxId} handStarted={this.props.handStarted}/>
        { this.props.result? <div className="result">{this.props.result}</div> : <div className="result hidden"></div>}
        { !this.props.handStarted ? <BetControls boxId={this.props.boxId}/>: null}
      </div>
    )
    }
}