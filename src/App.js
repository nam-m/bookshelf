import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro'

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import BookPreview from './features/bookshelf/book/BookPreview';
import useClickOutside from './utils/UseClickOutside';
import popoverBackground from './utils/PopoverBackground';
import PopoverWrapper from './components/common/PopoverWrapper';
import BookForm from './features/form/BookForm';
import { BookStorage } from './features/bookshelf/BookStorage';
import useLocalStorage from './utils/UseLocalStorage';

const App = () => {
  const [bookPreview, setBookPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [addBook, setAddBook] = useState(false);
  // const bookStorage = new BookStorage();
  // const [sortBooks, setSortBooks] = useState([bookStorage.books]);
  // const [sortBooks, setSortBooks] = useState([]);
  const [sortBooks, setSortBooks] = useLocalStorage('books', []);

  const previewRef = useRef();
  const addRef = useRef();
  /* Prevent setShowPreview re-rendering by using arrow function */
  useClickOutside(previewRef, () => setShowPreview(false));
  useClickOutside(addRef, () => setAddBook(false));
  /* TO DO: consider grouping popoverBackground and showPreview into 1 hook */
  popoverBackground(showPreview);

  return (
    <>
      <Header />
      <Main
        showPreview={showPreview} 
        setShowPreview={setShowPreview}
        setBookPreview={setBookPreview}
        setAddBook={setAddBook}
        sortBooks={sortBooks}
        setSortBooks={setSortBooks}
      />
      <Footer />
      <PreviewWrapper $showPreview={showPreview}>
        <BookPreview 
          bookPreview={bookPreview}
          showPreview={showPreview}
          ref={previewRef}
        />
      </PreviewWrapper>
      <AddBookWrapper $addBook={addBook}>
        <BookForm 
          sortBooks={sortBooks}
          setSortBooks={setSortBooks}
          addBook={addBook}
          setAddBook={setAddBook}
          ref={addRef}
        />
      </AddBookWrapper>
    </>
  );
};

const PreviewWrapper = styled(PopoverWrapper)``;

const AddBookWrapper = styled(PopoverWrapper)``;

export default App;
