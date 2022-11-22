import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import AvailableCardList from '../components/pokemon/AvailableCardList';
import * as CardsApi from '../api/CardsApi';

const Home = () => {
  const [availableCards, setAvailableCards] = useState([]);

  useEffect(() => {
    const fetchAvailableCards = async () => {
      const result = await CardsApi.getAvailableCards();
      setAvailableCards(result);
    }

    fetchAvailableCards();
  }, []);

  return (
    <Layout>
      <div>List of cards</div>
      <div>
        <AvailableCardList cards={availableCards}/>
      </div>
    </Layout>
  );
}

export default Home;