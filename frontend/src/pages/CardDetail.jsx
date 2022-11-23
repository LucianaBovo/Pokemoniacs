import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout';
import * as CardsApi from '../api/CardsApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { coinFormatter } from '../utils/helpers';

import './CardDetail.css';


const CardDetail = () => {
  const [cardDetail, setCardDetail] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchCard = async () => {
      const result = await CardsApi.getCardById(id);
      setCardDetail(result)
    }
    fetchCard();
  }, [id]);

  return (
    <Layout>
      {cardDetail ? <div className="card-detail">
        <img src={cardDetail.picture} alt={cardDetail.name} />
        <div>
          <h4>{coinFormatter((cardDetail.price))}</h4>
          <p>{(cardDetail.condition).replaceAll('_', ' ')}</p>
        </div>
      </div> : <div>Loading...</div>
      }

    </Layout>
  )

}

export default CardDetail;
