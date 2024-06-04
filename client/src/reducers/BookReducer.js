const bookActionTypes = {
  FETCH_BOOKS: {
    REQUEST: 'FETCH_BOOKS_REQUEST',
    SUCCESS: 'FETCH_BOOKS_SUCCESS',
    FAILURE: 'FETCH_BOOKS_FAILURE',
  },
  CREATE_BOOK: {
    REQUEST: 'CREATE_BOOK_REQUEST',
    SUCCESS: 'CREATE_BOOK_SUCCESS',
    FAILURE: 'CREATE_BOOK_FAILURE',
  },
  SORT_BOOKS: {
    AUTHOR: 'SORT_BOOKS_BY_AUTHOR',
    TITLE: 'SORT_BOOKS_BY_TITLE',
  },
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case bookActionTypes.FETCH_BOOKS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case bookActionTypes.FETCH_BOOKS.SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case bookActionTypes.FETCH_BOOKS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case bookActionTypes.CREATE_BOOK.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case bookActionTypes.CREATE_BOOK.SUCCESS:
      console.log('New book from payload: ', action.payload);
      return {
        ...state,
        books: [...state.books, action.payload],
        loading: false,
      };
    case bookActionTypes.CREATE_BOOK.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case bookActionTypes.SORT_BOOKS.TITLE:
      return {
        ...state,
        books: [...state.books].sort((a, b) => a.title.localeCompare(b.title)),
      };
    case 'SORT_BOOKS_BY_AUTHOR':
      return {
        ...state,
        books: [...state.books].sort((a, b) =>
          a.author.localeCompare(b.author)
        ),
      };
    default: {
      throw Error('Unknown book action: ' + action.type);
    }
  }
};

export default bookReducer;
