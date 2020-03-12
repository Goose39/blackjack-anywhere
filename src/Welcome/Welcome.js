import React from 'react';
import blackjack from '../assets/images/blackjack2.jpg'
import spade from '../assets/images/suits/s.png'
import heart from '../assets/images/suits/h.png'
import diamond from '../assets/images/suits/d.png'
import club from '../assets/images/suits/c.png'
import './Welcome.css';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationFrom from '../RegistrationForm/RegistrationForm'

export default class Welcome extends React.Component {
  state = {
    formOption: ''
  };
  // Display Selected Form
  setFrom = (form) => {
    this.setState({
      formOption: form
    })
  };

  render() {
    return (
    <>
      <header role="banner">
        <h1 className="app_name">Blackjack Anywhere</h1>
      </header>
      <section className="welcome">
        <div className="left_sidebar">
          <img src={spade} className="suit_sidebar" alt="spade symbol"></img>
          <img src={heart} className="suit_sidebar" alt="heart symbol"></img>
          <img src={club} className="suit_sidebar" alt="club symbol"></img>
          <img src={diamond} className="suit_sidebar" alt="diamond symbol"></img>
        </div>
        <div className="center_wraper">
          <div className="instructions">
            <p>This app allows you to play blackjack anywhere and everywhere.</p>
            <p>Start by creating an account by clicking on "Register Below"</p>
            <p>Once you have created an account you will be seated at the table with a starting account balance of $1,000</p>
            <p>If you would prefer to play as a Guest, click "Login as Guest" and you will be seated at the table with a starting account balance of $500</p>
            <p>As a Guest you will not be able to save your account balance to play with later.</p>
            <p>If you already have an account setup, you can login as usual.</p>
            <p>GOOD LUCK!</p>
          </div>
          <div className='login_options'>
            <input className="user_login_control" type='button' onClick={() => this.props.goToTable()} value='Login as Guest' />
            <input className="user_login_control" type='button' onClick={() => this.setFrom("Login")} value='Login' />
            <input className="user_login_control" type='button' onClick={() => this.setFrom("Register")} value='Register' />
          </div>
          <div className='login_container'>
            {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
            {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
          </div>
        </div>
      <div>
          <img src={blackjack} className="blackjack_ss" alt="blackjack hand"></img>
        </div>
      </section>
    </>
    )
  };
};
