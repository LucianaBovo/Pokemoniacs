const axios = require('axios');
let searchTerm;
//:searchterm (endpoint for getting one card)
//post endpoint to add the card in db
const getTypes = async () => {
    const res = await axios.get('https://api.pokemontcg.io/v1/types');
    console.log(res.data)
    return res.data;
}

// getTypes();

const getCardsFromApi = async () => {
    try {
        const { data } = await axios.get('https://api.pokemontcg.io/v1/cards?pageSize=50');
        // console.log(data.cards)
        for (let i = 0; i < data.cards.length; i++) {
            console.log(data.cards[i].name)
        }
    }
    catch (err) {
        console.log(err);
    }
}
getCardsFromApi();