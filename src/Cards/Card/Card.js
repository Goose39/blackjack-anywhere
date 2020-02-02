import React from 'react';
import PropTypes from 'prop-types';
import Club from '../../assets/images/suits/c.png'
import Diamond from '../../assets/images/suits/d.png'
import Spade from '../../assets/images/suits/s.png'
import Heart from '../../assets/images/suits/h.png'
import './Card.css';

export default function Card(props) {
  const imageStore = [
    { id: "c", src: Club, title: 'heart', alt: 'heart' },
    { id: "d", src: Diamond, title: 'club', alt: 'club' },
    { id: "s", src: Spade, title: 'spade', alt: 'spade' },
    { id: "h", src: Heart, title: 'diamond', alt: 'diamond' }
  ];

  const cardClass = ((props.id > 1) ? " card": "")
  const srcIdx = imageStore.findIndex(x => x.id === props.suit);

  return (
      <div className={`card-${props.id} front-card-outer${cardClass}`}>
        <div className="card-value-box">
          <div className="card-value">{props.value}</div>
          <div className="suite">
            <img className="suit-img" src={imageStore[srcIdx].src} alt={imageStore[srcIdx].alt} />
          </div>
        </div>
        <div className="card-inner" style={{ backgroundImage: `url(${imageStore[srcIdx].src})` }}></div>
      </div>
  );
}

Card.propTypes = {
  value: PropTypes
        .oneOf(['2','3','4','5','6','7','8','9','10','J','Q','K','A'])
        .isRequired,
  suit: PropTypes
        .oneOf(['d', 'h', 'c', 's'])
        .isRequired
};