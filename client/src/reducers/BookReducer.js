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
    case bookActionTypes.ADD_BOOK.REQUEST:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case bookActionTypes.ADD_BOOK.SUCCESS:
      return state.books.map((book) => {
        if (book.id === action.book.id) {
          return [...state, action.book];
        } else {
          return state;
        }
      });
    case bookActionTypes.ADD_BOOK.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: {
      throw Error('Unknown book action: ' + action.type);
    }
  }
};

export default bookReducer;
