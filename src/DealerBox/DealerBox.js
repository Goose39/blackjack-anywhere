import React from 'react'
import Cards from '../Cards/Cards'

export default function HandCount(props) {
  const result = props.box.result? props.box.result: null;
  const cards = props.box.cards ? <Cards cards={props.box.cards}/> : null
  return (
    <section className="dealer-section">
    <div id="box-0" className="box">
      { cards }
      { result? <div className="dealer-result">{result}</div>: null }
    </div>
    
  </section>
  )
}