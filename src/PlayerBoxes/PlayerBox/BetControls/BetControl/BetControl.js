import React from 'react'
import './BetControl.css'


const BetControl = (props) => (
  <div className="bet_controls">
    <div className="chip">
      <div className={`chip-inner ${props.color}`}>${props.value}</div>
    </div>
    <div className="bet_control">
      <button 
          className="add" 
          onClick={() => props.addBet(props.boxId, props.value)}>+</button>
      <button 
        className="remove" 
        onClick={()=> props.removeBet(props.boxId, props.value)} 
        disabled={props.disabled}>-</button>
    </div>
  </div>
)

export default BetControl;