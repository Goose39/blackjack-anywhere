import React from 'react';
import './TableHeader.css'

export default function TableHeader(props) {
  return (
    <header role="banner" className="table_header">
      <div className="user">User: {props.user}</div>
      <div className="balance">Balance: ${props.balance}</div>
    </header>
  )
}