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
        double: false, 
        insurance: false,
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
        double: false, 
        insurance: false,
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
        double: false, 
        insurance: false,
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
        double: false, 
        insurance: false, 
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
        double: false, 
        insurance: false, 
        stand: null,
        result: "",
        active: false
      }
    ],
    error: null,
  };

  componentDidMount() {
    const shoe = CreateShoe(this.state.decks);
    this.setState ({ shoe })
  }

  hit = (boxIndex) => {
    // const nextCard = this.getNextCard();
    const newShoe = [...this.state.shoe];
    const nextCard = newShoe.shift();

    const updatedPlayerBoxes = [...this.state.playerBoxes];
    
    updatedPlayerBoxes[boxIndex].cards.push(`${nextCard}`);
    
    console.log("before update State:", updatedPlayerBoxes)

    this.setState ({
     playerBoxes: updatedPlayerBoxes,
     shoe: newShoe
    })

    console.log("after update State is:", this.state.playerBoxes)
  }

  stand = (boxIndex) => {
    const updatedPlayerBoxes = [ ...this.state.playerBoxes ];
    updatedPlayerBoxes[boxIndex].stand = true;
    updatedPlayerBoxes[boxIndex].active = false;

    this.setActiveBox(boxIndex + 1)
    //update state to reflect that player STANDS on a given box and no more cards should be dealt to that box.
    this.setState ({
      playerBoxes: updatedPlayerBoxes, 
    })
  }

  updateDecks = (decks) => {
    console.log("updateDecks Fired", decks)
    this.setState({ decks })
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
    this.stand(boxIndex)

    const updatedPlayerBoxes = [...this.state.playerBoxes]
    console.log("double", updatedPlayerBoxes)
    updatedPlayerBoxes[boxIndex].bet *= 2;  
    console.log("double after update", updatedPlayerBoxes)

    this.setState({
      playerBoxes: updatedPlayerBoxes
    })

  }

  surrender = (boxIndex) => {
    this.stand(boxIndex)
    const updatedPlayerBoxes = [...this.state.playerBoxes]
    updatedPlayerBoxes[boxIndex].bet /= 2;  

    this.setState({
      playerBoxes: updatedPlayerBoxes
    })
  }

  setActiveBox = (boxIndex) => {   
    const updatedPlayerBoxes = [...this.state.playerBoxes]

    if (boxIndex <= 4) {
      if ((updatedPlayerBoxes[boxIndex].open) && !(updatedPlayerBoxes[boxIndex].stand)) {
        updatedPlayerBoxes[boxIndex].active = true;
        this.setState ({
          activeBox: { id: boxIndex + 1 },
          playerBoxes: updatedPlayerBoxes
        })
      }
    } else this.endHand()

  }

  addBetHandler = (boxId, bet) => {
    const boxIndex = boxId - 1;
    const updatedPlayerBoxes = [...this.state.playerBoxes];
    let UpdatedBalance = this.state.balance;

    if (UpdatedBalance >= bet) {
      updatedPlayerBoxes[boxIndex].bet += bet
      UpdatedBalance -= bet

      if (updatedPlayerBoxes[boxIndex].open !== true) {
        updatedPlayerBoxes[boxIndex].open = true;
      }
      
      this.setState ({
        playerBoxes: updatedPlayerBoxes,
        balance: UpdatedBalance
      })
    }
  }

  removeBetHandler = (boxId, bet) => {
    const boxIndex = boxId - 1;
    const updatedPlayerBoxes = [...this.state.playerBoxes];
    let UpdatedBalance = this.state.balance;
    
    UpdatedBalance += bet
    updatedPlayerBoxes[boxIndex].bet -= bet

    if (updatedPlayerBoxes[boxIndex].bet === 0) {
      updatedPlayerBoxes[boxIndex].open = false;
    }
  
    this.setState ({
      playerBoxes: updatedPlayerBoxes,
      balance: UpdatedBalance
    })
  }

  resultDealerHand= () => {
    const dealerBox = {...this.state.dealerBox};
    let cards = dealerBox.cards
    let handTotal = HandTotal(cards)
    const newShoe = [...this.state.shoe];
    

    while (handTotal <= 17) {
      const nextCard = newShoe.shift();
      dealerBox.cards.push(nextCard)
      handTotal = HandTotal(cards)
    }
    this.setState({
      dealerBox 
    })
  }

  endHand = () => {
    this.resultDealerHand();
    // this.payout();
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
      removeBet: this.removeBetHandler
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
                            />}
            />
          </Switch>
        </main>
      </TableContext.Provider>
    );
  }
  }
export default App;
