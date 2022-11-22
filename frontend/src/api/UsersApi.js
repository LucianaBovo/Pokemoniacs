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

  return 'sdasdads';
}