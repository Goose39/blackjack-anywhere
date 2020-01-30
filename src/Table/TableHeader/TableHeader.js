import React from 'react';

export default function PlayerControls(props) {
  return (
    <header role="banner">
      <div className="user">User: {props.user}</div>
      <div className="balance">Balance: ${props.balance}</div>
    </header>
  )
}