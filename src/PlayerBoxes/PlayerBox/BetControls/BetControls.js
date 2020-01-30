import React from 'react';
import BetControl from './BetControl/BetControl';
import TableContext from '../../../TableContext';
import './BetControls.css'

export default class BetControls extends React.Component {
  static contextType = TableContext;
  render () {
    const balance = this.context.balance;
    const boxBet = this.context.playerBoxes[this.props.boxId-1].bet
    const betsOnTable = this.context.playerBoxes? this.context.playerBoxes.map(box => box.bet): [];
    const bigBetOnTable = betsOnTable !== []? Math.max(...betsOnTable): 0;
    let disableButtonCheck = false;
    const chips = [{
                    value: 25,
                    color: 'blue'
                    }, 
                    {
                    value: 100, 
                    color: 'black'
                    }, 
                    {
                    value: 1000,
                    color: 'pink'
                    }, 
                    {
                    value: 10000,
                    color: 'red'
                    }];

    const controls = chips.map((chip) => {
      if (boxBet === 0 || chip.value > boxBet) {
        disableButtonCheck = true;
      }

      if ( chip.value <= balance || chip.value <= bigBetOnTable ) {
        return <BetControl 
                  key={`chip-${chip.value}_box-${this.props.boxId}`} 
                  boxId={(this.props.boxId)} 
                  value={chip.value} 
                  color={chip.color} 
                  addBet={this.context.addBet} 
                  removeBet={this.context.removeBet}
                  disabled={disableButtonCheck}
                />
      }
      return null
    })

    return (
    <div className="bet_controls_box">
      {controls}
    </div>
    )
  }
}
