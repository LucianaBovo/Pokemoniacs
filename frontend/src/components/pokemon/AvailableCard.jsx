import React from 'react';
import { useNavigate } from "react-router-dom";
import { coinFormatter } from '../../utils/helpers';

import './AvailableCard.css';

const AvailableCard = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cards/${card.id}`);
  }

  return (
    <div className="available-card" onClick={handleClick}>
      <img src={card.picture} alt={card.name} />
      <h3>{card.name}</h3>
      <div className='price-container'>
        <h4>{coinFormatter((card.price))}</h4>
      </div>
    </div>
  )
}

export default AvailableCard;