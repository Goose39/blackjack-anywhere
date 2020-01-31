import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { CreateShoe, HandTotal } from './store';
import Welcome from './Welcome/Welcome'
import TableContext from './TableContext';
import Table from './Table/Table';

class App extends React.Component {
  state = {
    user:'Guest',
    balance: 500,
    decks: 1,
    shoe: [],
    handStarted: false,
    openBoxes: [],
    activeBox: {
      id: undefined
    },
    dealerBox: {
      cards: [],
      total: null,
      result: "",
    },
    playerBoxes: [
      {
        id: 1,
        open: false, 
        bet: null, 
        cards: [],
        total: null,
        payout: null, 
        split: false,
        splitCards: [], 
        stand: null, 
        result: "",
        active: false
      },
      {
        id: 2,
        open: false, 
        bet: null, 
        cards: [],
        total: null,
        payout: null, 
        split: false, 
        splitCards: [],
        stand: null,
        result: "",
        active: false
      },
      {
        id: 3,
        open: false, 
        bet: null, 
        cards: [],
        total: null,
        payout: null, 
        split: false, 
        splitCards: [], 
        stand: null,
        result: "",
        active: false
      },
      {
        id: 4,
        open: false, 
        bet: null, 
        cards: [],
        total: null,
        payout: null, 
        split: false,
        splitCards: [],  
        stand: null,
        result: "",
        active: false
      },
      {
        id: 5,
        open: false, 
        bet: null, 
        cards: [],
        total: null,
        payout: null, 
        split: false,
        splitCards: [],   
        stand: null,
        result: "",
        active: false
      }
    ],
    error: null,
  };

  componentDidMount() {
    this.resetShoe();
  }

  hit = (boxIndex) => {
    // const nextCard = this.getNextCard();
    const newShoe = [...this.state.shoe];
    const nextCard = newShoe.shift();
    const updatedPlayerBoxes = [...this.state.playerBoxes];
    
    updatedPlayerBoxes[boxIndex].cards.push(`${nextCard}`);

    this.setState ({
     playerBoxes: updatedPlayerBoxes,
     shoe: newShoe
    })
  }

  stand = (boxIndex) => {
    const updatedPlayerBoxes = [ ...this.state.playerBoxes ];
    updatedPlayerBoxes[boxIndex].stand = true;
    updatedPlayerBoxes[boxIndex].active = false;
    updatedPlayerBoxes[boxIndex].total = HandTotal(updatedPlayerBoxes[boxIndex].cards)

    //update state to reflect that player STANDS on a given box and no more cards should be dealt to that box.
    this.setState ({
      playerBoxes: updatedPlayerBoxes, 
    })
    //Set next box to active
    this.setActiveBox(boxIndex + 1)
  }

  updateDecks = (decks) => {
    this.setState({ decks })
  }

  resetShoe = () => {
    const decks = this.state.decks
    const shoe = CreateShoe(decks);
    this.setState ({ shoe: shoe })
  }

  resetHand = () => {
    const decks = this.state.decks
    const shoe = CreateShoe(decks);
    const playerBoxes = [...this.state.playerBoxes];
    const updatedDealerBox = {...this.state.dealerBox};
    updatedDealerBox.cards = [];
    console.log("before reset", playerBoxes);
    const updatedPlayerBoxes = playerBoxes.map(box => {
      box.open = false;
      box.bet = null;
      box.cards = [];
      box.total = null;
      box.payout = null
      box.split = false; 
      box.splitCards = []; 
      box.stand = null;
      box.result = "";
      box.active = false;
      return box
    })

    this.setState({
      dealerBox: updatedDealerBox,
      playerBoxes: updatedPlayerBoxes,
      activeBox: {
        id: undefined
      },
      handStarted: false,
      shoe: shoe
    })
  }

  deal = () => {

    const newShoe = [...this.state.shoe];
    //deal 2 cards to each open box
    for (let i=1; i<=2; i++) {
      const playerBoxes = [...this.state.playerBoxes]
      let updatedOpenBoxes = []
      //Deal each open box a card
      const updatedPlayerBoxes = playerBoxes.map(box => {
        if (box.open) {
          updatedOpenBoxes.push(box.id)
          // const nextCard = this.getNextCard()
          const nextCard = newShoe.shift();
          box.cards.push(nextCard)
        } 
        return box
      })
      //Deal Dealer a card
      const updatedDealerBox = {...this.state.dealerBox}
      const nextCard = newShoe.shift();
      const firstOpenBox = updatedOpenBoxes[0]

      updatedDealerBox.cards.push(nextCard)

      //Update state with all cards dealt and Open boxes
      this.setState({
        playerBoxes: updatedPlayerBoxes,
        dealerBox: updatedDealerBox,
        openBoxes: updatedOpenBoxes,
        shoe: newShoe,
        handStarted: true,
        activeBox: {id: firstOpenBox}
      })
    }
  }
  
  // getNextCard = () => {
  //     const newShoe = [...this.state.shoe];
  //     const nextCard = newShoe.shift();
  //     this.setState ({ shoe: newShoe })
  //     return nextCard 
  // }

  split = (cards) => {

  }

  double = (boxIndex) => {
    this.hit(boxIndex)
    let balance = this.state.balance;
    const updatedPlayerBoxes = [...this.state.playerBoxes]
    balance -= updatedPlayerBoxes[boxIndex].bet
    updatedPlayerBoxes[boxIndex].bet *= 2;

    this.setState({
      balance: balance,
      playerBoxes: updatedPlayerBoxes
      }, () => {this.stand(boxIndex);}
    )
  }

  surrender = (boxIndex) => {
    const updatedPlayerBoxes = [...this.state.playerBoxes]
    updatedPlayerBoxes[boxIndex].payout = updatedPlayerBoxes[boxIndex].bet/2;
    updatedPlayerBoxes[boxIndex].bet = null; 
    updatedPlayerBoxes[boxIndex].result = "SURRENDER"
    

    this.setState({
      playerBoxes: updatedPlayerBoxes,
    }, () => {this.setActiveBox(boxIndex + 1);}
    )
  }

  setActiveBox = (boxIndex) => {   
    const updatedPlayerBoxes = [...this.state.playerBoxes]

    if (boxIndex <= 4) {
      for (let i = boxIndex; i <= 4; i++) {
        if (updatedPlayerBoxes[i].open) {
          updatedPlayerBoxes[i].active = true;
          return this.setState ({
            activeBox: { id: boxIndex + 1 },
            playerBoxes: updatedPlayerBoxes
          })
        }
      }
    } else {
      this.setState ({
        activeBox: { id:  undefined},
      }, () => {this.resultDealerHand();})
    }

  
}

  addBetHandler = (boxId, bet) => {
    const boxIndex = boxId - 1;
    const updatedPlayerBoxes = [...this.state.playerBoxes];
    let UpdatedBalance = this.state.balance;
    const openBoxes = [...this.state.openBoxes];

    if (UpdatedBalance >= bet) {
      updatedPlayerBoxes[boxIndex].bet += bet
      UpdatedBalance -= bet

      if (updatedPlayerBoxes[boxIndex].open !== true) {
        updatedPlayerBoxes[boxIndex].open = true;
        openBoxes.push(boxId)
      }
      
      this.setState ({
        playerBoxes: updatedPlayerBoxes,
        balance: UpdatedBalance,
        openBoxes: openBoxes
      })
    }
  }

  removeBetHandler = (boxId, bet) => {
    const boxIndex = boxId - 1;
    const updatedPlayerBoxes = [...this.state.playerBoxes];
    let UpdatedBalance = this.state.balance;
    const openBoxes = [...this.state.openBoxes];
    
    UpdatedBalance += bet
    updatedPlayerBoxes[boxIndex].bet -= bet

    if (updatedPlayerBoxes[boxIndex].bet === 0) {
      updatedPlayerBoxes[boxIndex].open = false;
      const index = openBoxes.indexOf(boxId);
      openBoxes.splice(index, 1);
    }
  
    this.setState ({
      playerBoxes: updatedPlayerBoxes,
      balance: UpdatedBalance,
      openBoxes: openBoxes
    })
  }

  resultDealerHand = () => {
    const dealerBox = {...this.state.dealerBox};
    const newShoe = [...this.state.shoe];
    dealerBox.total = HandTotal(dealerBox.cards);

    while (dealerBox.total < 17) {
      const nextCard = newShoe.shift();
      dealerBox.cards.push(nextCard);
      dealerBox.total = HandTotal(dealerBox.cards);
    }

    this.setState({
      dealerBox: dealerBox 
    }, () => {this.playerPayout();}
    )
    
  }

  playerPayout = () => {

    const updatedPlayerBoxes = [...this.state.playerBoxes];
    const dealer = {...this.state.dealerBox}
    let balance = this.state.balance;

    updatedPlayerBoxes.map(box => {
      if (box.result == "") {
        
        if ((box.cards.length === 2) && (box.total === 21)) {
          box.result = "Blackjack!"
          box.payout = box.bet * 3/2
          balance += box.payout
        }
        if (box.total > 21) {
          box.result = 'Bust';
          box.payout = 0;
        } else {
          if (box.total > dealer.total) {
            box.payout = box.bet * 2;
            box.result = `Win ${box.bet}`;
            balance += box.payout
          } else if (box.total === dealer.total) {
            box.result = "Push!"
            box.payout = box.bet
            balance += box.payout
          } else {
            box.result = "Lose"
          }
        }
      } else if (box.result == "SURRENDER") {
        balance += box.payout
      } 
    })

    this.setState({
      playerBoxes: updatedPlayerBoxes,
      balance: balance
    })

  }

  render() {
    const value = {
      shoe: this.state.shoe,
      dealer: this.state.dealerBox,
      playerBoxes: this.state.playerBoxes,
      balance: this.state.balance,
      user: this.state.user,
      openBoxes: this.state.openBoxes,
      activeBox: this.state.activeBox,
      deal: this.deal,
      hit: this.hit,
      stand: this.stand,
      split: this.split,
      surrender: this.surrender,
      double: this.double,
      payout: this.payout,
      addBet: this.addBetHandler,
      removeBet: this.removeBetHandler, 
      newHand: this.resetHand
    }
    return (
      <TableContext.Provider value={value}>
        <main className='App'>
          <Switch>
            <Route
              path='/'
              exact
              render={({ history }) => <Welcome 
                                    decks={this.state.decks}
                                    updateDecks={() => this.updateDecks()}
                                    goToTable={() => history.push('/table')} 
                                  />}
            />
            <Route
              path='/table'
              render={() => <Table 
                              deal={() => this.deal()} 
                              user={this.state.user} 
                              balance={this.state.balance} 
                              playerBoxes={[...this.state.playerBoxes]}
                              dealerBox={{...this.state.dealerBox}}
                              handStarted={this.state.handStarted}
                              nextHand={() => this.resetHand()}
                            />}
            />
          </Switch>
        </main>
      </TableContext.Provider>
    );
  }
  }
export default App;
