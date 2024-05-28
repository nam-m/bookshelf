import responseErrorHandler from './ServiceErrorHandler';

const baseUrl = import.meta.env.VITE_BOOKS_BASE_URL;
const booksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

const getAllBooks = () => {
  return fetch(baseUrl)
    .then((response) => {
      responseErrorHandler(response);
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
      responseErrorHandler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error creating new book:', error);
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
      responseErrorHandler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error updating book:', error);
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
      responseErrorHandler(response);
    })
    .catch((error) => {
      console.error('Error deleting book:', error);
    });
};

const searchBook = (query, maxResults = 10) => {
  const url = new URL(booksApiUrl);
  url.searchParams.append('q', query);
  url.searchParams.append('maxResults', maxResults);

  return fetch(url)
    .then((response) => {
      responseErrorHandler(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Error searching book:', error);
    });
};

export default { getAllBooks, createBook, updateBook, deleteBook, searchBook };
