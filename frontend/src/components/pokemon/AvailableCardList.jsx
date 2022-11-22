import React from 'react'
import AvailableCard from './AvailableCard';

import './AvailableCardList.css';

const AvailableCardList = ({ cards }) => {
  if (cards.length === 0) {
    return <div>No cards available.</div>
  }

  return (
    <div className="available-card-list">
      {cards.map((card) => {
        return <AvailableCard card={card} key={card.id} />
      })}
    </div>
  )
}

export default AvailableCardList;
