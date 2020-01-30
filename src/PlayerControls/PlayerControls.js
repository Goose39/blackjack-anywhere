import React from 'react';
import './PlayerControls.css';
import TableContext from '../TableContext';


export default class PlayerControls extends React.Component {
  static contextType = TableContext;

  render() { 
    const controls = [];

    if (this.props.handStarted && this.context.activeBox.id) {
      const activeBoxIndex = this.context.activeBox.id - 1;
      const activeBox = this.context.playerBoxes[activeBoxIndex];
      console.log(activeBoxIndex, activeBox)
      if (activeBox.cards.length === 2) {
        controls.push(<button className="action" onClick={() => this.context.surrender(activeBoxIndex)}>SURRENDER</button>);
        
        if (activeBox.bet <= this.context.balance) {
          controls.push(<button className="action" onClick={() => this.context.double(activeBoxIndex)}>DOUBLE</button>);
        }

        if (activeBox.cards[0].slice(0,-1) === activeBox.cards[1].slice(0,-1) ) {
          controls.push(<button className="action" onClick={() => this.context.split}>SPLIT</button>);
        }
      }

      controls.push(<button className="action" onClick={() => this.context.hit(activeBoxIndex)}>HIT</button>);
      controls.push(<button className="action" onClick={() => this.context.stand(activeBoxIndex)}>STAND</button>);
    } else controls.push(<button className="action" onClick={this.props.deal}>DEAL</button>);

    return (
      <section className="actions">
        {controls}
      </section>
    )
    }
}