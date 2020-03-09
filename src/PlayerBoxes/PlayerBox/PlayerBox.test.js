import React from 'react';
import ReactDOM from 'react-dom';
import PlayerBox from './PlayerBox';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerBox 
    key={`box-1`} 
    boxId={1} 
    cards={['As', '10h']} 
    bet={200}
    result={undefined}
    handStarted={false}
    open={true}
    active={false}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
})