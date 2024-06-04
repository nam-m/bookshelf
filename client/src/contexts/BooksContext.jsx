import React, { createContext, useContext, useReducer } from 'react';
import bookReducer from '../reducers/BookReducer';

export const BooksContext = createContext();
export const BooksDispatchContext = createContext();

const bookInitialState = {
  books: [],
  loading: false,
  error: null,
};

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, bookInitialState);

  return (
    <BooksContext.Provider value={state}>
      <BooksDispatchContext.Provider value={dispatch}>
        {children}
      </BooksDispatchContext.Provider>
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BooksContext);
};

export const useBooksDispatch = () => {
  return useContext(BooksDispatchContext);
};
