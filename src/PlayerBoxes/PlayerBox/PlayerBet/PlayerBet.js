import React from 'react'
import './PlayerBet.css'

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
