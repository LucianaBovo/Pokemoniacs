import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import PokeCard from './PokeCard';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState([])
    const getCards = async () => {
        try {
            if (searchTerm !== '') {
                const { data } = await axios.get(`https://api.pokemontcg.io/v1/cards?name=${searchTerm}`);
                setCards(data.cards);
            }
            //  data.cards.map(i => console.log(i.imageUrl))
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getCards();
    }

    return (
        <div>
            <form className="app__searchForm" onSubmit={handleSubmit}>
                <input className="text-input" type="text-input" placeholder="search for cards"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input className='app__submit' type="submit" value="Search"
                />
            </form>
            <div className='app__cards'>
                {cards.map((card, index) => {
                    return <PokeCard card={card} key={index} />;
                })}
            </div>
        </div>
    )
}

export default SearchForm