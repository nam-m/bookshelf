const baseUrl = '/api/login';
import responseErrorHandler from './ServiceErrorHandler';

const login = async (credentials) => {
  const post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };

  return fetch(baseUrl, post_options)
    .then((response) => {
      responseErrorHandler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error creating new book:', error);
    });
};

export default login;
