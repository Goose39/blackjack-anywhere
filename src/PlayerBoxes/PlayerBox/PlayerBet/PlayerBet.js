import React from 'react'

export default function PlayerBet(props) {
  return (
  <div className="bets">{props.bet > 0? `$${props.bet}`: "Place Bet"}</div>
  )
}

