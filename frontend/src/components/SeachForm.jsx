import React from 'react'
import { useState } from 'react'
import PokeCard from './PokeCard';
import Layout from './layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';

import './SearchForm.css';

const SearchForm = () => {
  const { isAuthenticated, user } = useAuth0();

  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([])
  
  const getCards = async () => {
    try {
      if (searchTerm !== '') {
        const response = await fetch(`https://api.pokemontcg.io/v1/cards?name=${searchTerm}`)
          const data = await response.json();
          console.log(data);
        setCards(data.cards);
      }
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

      <Layout>
        {isAuthenticated ? <div>
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
          : <div>Please login</div>}
      </Layout>
    </div>
  )
}

export default SearchForm