import React from 'react';
import DeckControl from './DeckControl/DeckControl';
import LoginForm from '../../LoginForm/LoginForm';
import BurgerMenu from '../../BurgerMenu/BurgerMenu'
import './TableHeader.css';

export default class TableHeader extends React.Component {
  state = {
    switchUser: false,
    activeBurger: false,
    burgerButtonClass: "",
  }

  updateSwitchUserHandler = () => {
    const newVal = !this.state.switchUser 

    this.setState({
      switchUser: newVal
    })
  }

  burgerHandler = () => {
    const newVal = !this.state.activeBurger 
    let burgerButtonClass = ""
    
    if (newVal) {
      burgerButtonClass = ' is-active'
    }

    this.setState({
      activeBurger: newVal,
      burgerButtonClass: burgerButtonClass
    })
  }



  render() {

    return (
      <>
        <header role="banner" className="table_header">
          <div>
            <div className="user_details">
              <div className="user">User: {this.props.user}</div>
              <div className="balance">Balance: ${this.props.balance}</div>
            </div>
            {!this.props.handStarted? (
            <div className='login_controls'>
              <button className='user_login_control' onClick={() => this.updateSwitchUserHandler()}>SWITCH USER</button>
              <button className='user_login_control' onClick={() => this.props.logoutUserHandler()}>LOGOUT</button>
            </div> )
            : null }
          </div>
          
          {!this.props.handStarted? <DeckControl decks={this.props.decks} updateDecks={this.props.updateDecks} />: null}
          
          {!this.props.handStarted?    
            (<div className='burger_icon'>
                <button class={`hamburger hamburger--squeeze${this.state.burgerButtonClass}`} type="button" onClick={() => this.burgerHandler()}>
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>)
              :null}

        </header>
        <div>
          {this.state.switchUser && !this.props.handStarted? <LoginForm handleSetUser={this.props.handleSetUser} addClass=' table_login' />: null }
        </div>
        {this.state.activeBurger? <BurgerMenu decks={this.props.decks} updateDecks={this.props.updateDecks} />: null }
      </>
    )
  }
}