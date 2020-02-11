import React from 'react';
import './PlayerControls.css';
import TableContext from '../TableContext';


export default class PlayerControls extends React.Component {
  static contextType = TableContext;

  render() { 
    const controls = [];

    if (!(this.props.handStarted) && (this.context.openBoxes.length > 0)) 
      {
        controls.push(<button className="action" onClick={this.props.deal}>DEAL</button>);
      } 
    else if (this.props.handStarted && this.context.activeBox.id) 
      {
        const activeBoxIndex = this.context.activeBox.id - 1;
        const activeBox = this.context.playerBoxes[activeBoxIndex];

        if (activeBox.cards.length === 2) 
          {
            controls.push(<button className="action" onClick={() => this.context.surrender(activeBoxIndex)}>SURRENDER</button>);
            
            if (activeBox.bet <= this.context.balance) 
              {
                controls.push(<button className="action" onClick={() => this.context.double(activeBoxIndex)}>DOUBLE</button>);
              }
            // Split function to be added at a later stage

            // if (activeBox.cards[0].slice(0,-1) === activeBox.cards[1].slice(0,-1) ) 
            //   {
            //     controls.push(<button className="action" onClick={() => this.context.split}>SPLIT</button>);
            //   }
          }
        controls.push(<button className="action" onClick={() => this.context.hit(activeBoxIndex)}>HIT</button>);
        controls.push(<button className="action" onClick={() => this.context.stand(activeBoxIndex)}>STAND</button>);
      } 
    else if ((this.props.handStarted) && (this.context.openBoxes.length > 0))
      {
        if (this.context.balance > 25) {
          controls.push(<button className="action" onClick={() => this.props.nextHand()}>START NEW HAND</button>);
        } else {
          controls.push(<button className="action" onClick={() => this.props.resetBalance()}>RESET BALANCE</button>);
        }
        
      }

    return (
      <section className="controls">
        <div className="actions">
         {controls}
        </div>
      </section>
    )
    }
}