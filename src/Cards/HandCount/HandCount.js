import React from 'react'
import { HandTotal } from '../../store'
import './HandCount.css'

export default function HandCount(props) {

  const sum = HandTotal(props.cards);
  const handCount = sum > 0 ? <div className="hand-count">{sum}</div> : null;
  return (
    <>
      { handCount }
    </>

  )
}