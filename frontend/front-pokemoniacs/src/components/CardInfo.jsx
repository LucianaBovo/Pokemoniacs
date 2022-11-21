import React from 'react'

const CardInfo = ({ card }) => {
    return (
        <div>
          <h2>{ card.name }</h2>
          <input type='text' placeholder='Enter price'></input>
          <select>
            <option>Used</option>
            <option>New</option>
          </select>
          <button>Post ad</button>
        </div>
    
    )
}

export default CardInfo
