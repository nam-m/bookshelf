const baseUrl = '/api/books';

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

const updateBook = (bookToUpdate) => {
  const update_options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookToUpdate),
  };

  return fetch(`${baseUrl}/${bookToUpdate.id}`, update_options)
    .then((response) => {
      response_error_handler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error updating book:', error);
      return [];
    });
};

const deleteBook = (bookToDelete) => {
  const delete_options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookToDelete),
  };

  return fetch(`${baseUrl}/${bookToDelete.id}`, delete_options)
    .then((response) => {
      response_error_handler(response);
      // return response.json();
    })
    .catch((error) => {
      console.error('Error deleting book:', error);
      return [];
    });
};

export default { getAllBooks, createBook, updateBook, deleteBook };
