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
          {!this.props.handStarted? <button onClick={() => this.updateSwitchUserHandler()}>SWITCH USER</button>: null}
          <div className="user">User: {this.props.user}</div>
          <div className="balance">Balance: ${this.props.balance}</div>
          {!this.props.handStarted? <DeckControl decks={this.props.decks} updateDecks={this.props.updateDecks} />: null}
        </header>
        <div>
          {this.state.switchUser && !this.props.handStarted? <LoginForm handleSetUser={this.props.handleSetUser}/>: null }
        </div>
      </>
    )
  }
}