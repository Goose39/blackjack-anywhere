import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Table 
      handleSetUser={(user, balance) => this.handleSetUser(user, balance)}
      logoutUserHandler={() => this.logoutUserHandler()}
      decks={5}
      updateDecks={() => this.updateDecks}
      deal={() => this.deal()} 
      user={'guest'} 
      balance={500} 
      playerBoxes={[]}
      dealerBox={{}}
      handStarted={false}
      nextHand={() => this.resetHand()}
      resetBalance={() => this.resetBalance()}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});