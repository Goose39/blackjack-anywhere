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
      <section className="instructions">
        <p>This app allows you to play blackjack anywhere and everywhere.</p>
        <p>Start by creating an account by clicking on "Register Below"</p>
        <p>Once you have created an account you will be seated at the table with a starting account balance of $1,000</p>
        <p>If you would prefer to play as a Guest, click "Login as Guest" and you will be seated at the table with a starting account balance of $500</p>
        <p>As a Guest you will not be able to save your account balance to play wih later.</p>
        <p>If you already have an account setup, you can login as usual.</p>
        <p>GOOD LUCK!</p>
      </section>
      <div className='login_options'>
        <input className="user_login_control" type='button' onClick={() => this.props.goToTable()} value='Login as Guest' />
        <input className="user_login_control" type='button' onClick={() => this.setFrom("Login")} value='Login' />
        <input className="user_login_control" type='button' onClick={() => this.setFrom("Register")} value='Register' />
      </div>
      <div className='login_container'>
        {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
        {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
      </div>
    </>
    )
  }
}
