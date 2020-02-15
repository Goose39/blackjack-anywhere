import React from 'react';
import './PlayerControls.css';
import TableContext from '../TableContext';
// component deals with the logic of rendering game controls. Double and Surrender only
// available on players first action of each hand (player has only two cards). 
// Hit and stand for each "open box"

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

        controls.push(<button className="action" onClick={() => this.context.hit(activeBoxIndex)}>HIT</button>);
        controls.push(<button className="action" onClick={() => this.context.stand(activeBoxIndex)}>STAND</button>);

        if (activeBox.cards.length === 2) 
          {
            controls.push(<button className="action" onClick={() => this.context.surrender(activeBoxIndex)}>SURRENDER</button>);
            
            if (activeBox.bet <= this.context.balance) 
              {
                controls.push(<button className="action" onClick={() => this.context.double(activeBoxIndex)}>DOUBLE</button>);
              }
          }
      } 
    else if ((this.props.handStarted) && (this.context.openBoxes.length > 0))
      {
        if (this.context.balance > 25) {
          controls.push(<button className="action wide" onClick={() => this.props.nextHand()}>START NEW HAND</button>);
        } else {
          controls.push(<button className="action wide" onClick={() => this.props.resetBalance()}>RESET BALANCE</button>);
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