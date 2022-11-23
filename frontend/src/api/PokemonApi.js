let searchTerm;
//:searchterm (endpoint for getting one card)
//post endpoint to add the card in db
const getTypes = async () => {
  const res = await fetch('https://api.pokemontcg.io/v1/types');
  const result = await res.json();
  console.log(result.data)
  return result.data;
}

export const getCardsFromApi = async () => {
  try {
    const { data } = await fetch('https://api.pokemontcg.io/v1/cards?pageSize=50');
    console.log(data.json());
    const response = await data.json();
    for (let i = 0; i < response.cards.length; i++) {
      console.log(data.cards[i].name)
    }
  }
  catch (err) {
    console.log(err);
  }
}
