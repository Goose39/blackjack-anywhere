import React from 'react';
import DeckControl from './DeckControl/DeckControl';
import LoginForm from '../../LoginForm/LoginForm';
import './TableHeader.css';

export default class TableHeader extends React.Component {
  state = {
    switchUser: false,
  }

  updateSwitchUserHandler = () => {
    const newVal = !this.state.switchUser 

    this.setState({
      switchUser: newVal
    })
  }

  render() {

    return (
      <>
        <header role="banner" className="table_header">
          <div className='user_details'>
            <div>
              <div className="user">User: {this.props.user}</div>
              <div className="balance">Balance: ${this.props.balance}</div>
            </div>
            {!this.props.handStarted?
            <div>
              <button className='user_login_control' onClick={() => this.updateSwitchUserHandler()}>SWITCH USER</button>
              <button className='user_login_control' onClick={() => this.props.logoutUserHandler()}>LOGOUT</button>
            </div>
            :null}
          </div>
          {!this.props.handStarted? <DeckControl decks={this.props.decks} updateDecks={this.props.updateDecks} />: null}
        </header>
        <div>
          {this.state.switchUser && !this.props.handStarted? <LoginForm handleSetUser={this.props.handleSetUser} addClass=' table_login' />: null }
        </div>
      </>
    )
  }
}