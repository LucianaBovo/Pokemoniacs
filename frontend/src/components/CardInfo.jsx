import React, { useState } from 'react';
import * as UsersApi from '../api/UsersApi';


const CardInfo = ({ card }) => {

    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('')

    const postCard = () => {
        console.log('the card information is', card);
        const userId = window.localStorage.getItem('userId');
        console.log('inside postCard', condition, price, userId, )
        UsersApi.createCardForUser(userId, card, condition, price);
    }

    const handleChange = (e) => {
        console.log(e)
        setPrice(e.target.value);
    }
    const handleCondition = (e) => {
        console.log(e)
        setCondition(e.target.value);
    }
    return (
        <div>
            <h2>{card.name}</h2>
            <input type='text' placeholder='Enter price' onChange={handleChange} value={price}></input>
            <select onChange={handleCondition} value={condition}>
                <option value="">Select the card condition</option>
                <option value="NEW">New</option>
                <option value="AS_GOOD_AS_NEW">As good as new</option>
                <option value="USED">Used</option>
            </select>
            <button onClick={postCard}>Post ad</button>
        </div>

    )
}

export default CardInfo

