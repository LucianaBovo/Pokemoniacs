import React from 'react'
import { useState } from 'react'
import './PokeCard.css'
import CardInfo from './CardInfo'
const PokeCard = ({ card }) => {
    //    const [toggle, setToggle] = useState();
    const [visible, setVisible] = useState(false);
    //put ternary while displaying the image
    const handleClick = () => {
        setVisible(!visible);
    }
    return (
        <div className='poke-card' key={card.id}>
            <img src={card.imageUrl} alt="" onClick={handleClick} />
            <div className='poke-card-body'>
                {visible ? <CardInfo card={card} /> : null}
                {/* <h2>{ card.name}</h2> */}
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default PokeCard