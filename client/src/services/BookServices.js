const baseUrl = 'http://localhost:3002/books';

const response_error_handler = (response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

const getAllBooks = () => {
  return fetch(baseUrl)
    .then((response) => {
      response_error_handler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching all books:', error);
      return [];
    });
};

const createBook = (newBook) => {
  const post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  };

  return fetch(baseUrl, post_options)
    .then((response) => {
      response_error_handler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error creating new book:', error);
      return [];
    });
};

const deleteBook = (book_id, book) => {
  const delete_options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${baseUrl}/${book_id}`, delete_options)
    .then((response) => {
      response_error_handler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error deleting book:', error);
      return [];
    });
};

export default { getAllBooks, createBook, deleteBook };
