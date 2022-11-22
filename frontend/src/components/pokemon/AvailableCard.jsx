import React from 'react';
import { useNavigate } from "react-router-dom";

import './AvailableCard.css';

const AvailableCard = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cards/${card.id}`);
  }

  return (
    <div className="available-card" onClick={handleClick}>
      <img src={card.picture} alt={card.name} />
      <h4>{card.price}</h4>
    </div>
  )
}

export default AvailableCard;