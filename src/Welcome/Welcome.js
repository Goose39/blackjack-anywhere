import React from 'react';
import './Welcome.css'

export default class Welcome extends React.Component {
  render() {
    return (
      <>
      <header role="banner">
        <h1>Blackjack Anywhere</h1>
      </header>
      <section class="instructions">
        <p>Do you even Blackjack!?</p>
        <p>This app allows you to play blackjack anywhere and everywhere.</p>
        <p>Start by selecting how many decks of cards you would like to play with.</p>
        <p>Once you are at the table your account balance will be loaded with $1,000 in play credit. Try your best to build you bankroll and you could see your name at the top the leaderboard.</p>
        <p>Place a bet on any of the open boxes at the table and press deal.</p>
      </section>
      <form onSubmit={() => this.props.goToTable()}>
        <div>
          <label htmlFor='decks'>No decks to play with: </label>
          <input id="decks" type="number" max="5" min="1" value={this.props.decks} onChange={e => this.props.updateDecks(e.target.value)} />
        </div>
        <button className="action" type="submit">Let's Play!</button> 
      </form>
    </>
    )
  }
}

Welcome.defaultProps = {
  decks: 5
}