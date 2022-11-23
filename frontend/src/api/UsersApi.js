const BASE_SERVER_URL = 'http://localhost:3001';

export const createUserIfNotExist = async (user) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      sub: user.sub
    })
  };
  const response = await fetch(`${BASE_SERVER_URL}/users`, options);
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return result.userId;
}

export const createCardForUser = async (userId, card, condition, price) => {
  console.log('this is inside createcardforuser', card.name, card.imageUrl, condition, price, userId)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: card.name,
      picture: card.imageUrl,
      condition: condition,
      price: price,
    })
  };
  const response = await fetch(`${BASE_SERVER_URL}/users/${userId}/cards`, options);
  const result = await response.json();

  if (!result.success) {
    return 'Some error occurred. Please Try again.';
  }

  return 'Card was added successfully.';
}