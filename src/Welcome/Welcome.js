import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <>
      <header role="banner">
        <h1>Blackjack Anywhere</h1>
      </header>
      <section>
        <p>Do you even Blackjack!?</p>
        <p>This app allows you to play blackjack anywhere and everywhere, that there is an internet connection of course. </p>
        <p>Start by selecting how many decks of cards you would like to play with.</p>
        <p>Once you have done that your account balance will be loaded with $1,000 in play credit. Try your best to build you bankroll and you could see your name at the top the leaderboard.</p>
        <p>To open a new box, simply click on the box to place a bet and the new box will be dealt in. When you have placed all your bets, click DEAL and the hand will start.</p>
      </section>
      <section>
        <form onSubmit={() => this.props.goToTable()}>
          <label htmlFor='decks'>No decks to play with: </label>
          <input id="decks" type="number" value={this.props.decks} onChange={e => this.props.updateDecks(e.target.value)} />
          <button className="action" type="submit">Let's Play!</button> 
        </form>
      </section>
    </>
    )
  }
}

Welcome.defaultProps = {
  decks: 5
}