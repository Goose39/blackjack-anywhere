import React from 'react'
import './PlayerBet.css'

// Bets can only be placed before hand starts
// Boxes that have no bets are empty once hand starts ("Place Bet" removed)

export default function PlayerBet(props) {
  let betBox = null

  if (!(props.handStarted) && !(props.bet > 0)) {
    betBox = <div className="bet">Place Bet</div>
  }

  if (!(props.handStarted) && (props.bet > 0)) {
    betBox = <div className="bet">${props.bet}</div>
  }

  if ((props.handStarted) && (props.bet > 0)) {
    betBox = <div className="bet">${props.bet}</div>
  }

  if ((props.handStarted) && !(props.bet > 0)) {
    betBox = <div className="bet"></div>
  }

  return (
  <>
    {betBox}
  </>
  )
}
