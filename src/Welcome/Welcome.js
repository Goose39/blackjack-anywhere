import React from 'react';
import './Welcome.css';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationFrom from '../RegistrationForm/RegistrationForm'

export default class Welcome extends React.Component {
  state = {
    formOption: ''
  }

  setFrom = (form) => {
    this.setState({
      formOption: form
    })
  }

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
      <div className='login_options'>
        <input type='button' onClick={() => this.props.goToTable()} value='Login as Guest' />
        <input type='button' onClick={() => this.setFrom("Login")} value='Login' />
        <input type='button' onClick={() => this.setFrom("Register")} value='Register' />
      </div>
      <div>
        {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
        {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
      </div>
    </>
    )
  }
}
