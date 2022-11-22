const BASE_SERVER_URL = 'http://localhost:3001';

export const getAvailableCards = async () => {
  const response = await fetch(`${BASE_SERVER_URL}/cards/available`);
  const result = await response.json();
  return result;
}

export const getCardById = async (id) => {
  const response = await fetch(`${BASE_SERVER_URL}/cards/${id}`);
  const result = await response.json();
  return result;
}
