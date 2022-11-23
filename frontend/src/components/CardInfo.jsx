import React from 'react';

const CardInfo = ({ card }) => {
    
    return (
        <div>
            <h2>{card.name}</h2>
            <input type='text' placeholder='Enter price'></input>
            <select>
                <option>Select the card condition</option>
                <option>New</option>
                <option>As good as new</option>
                <option>Used</option>
            </select>
            <button>Post ad</button>
        </div>

    )
}

export default CardInfo

