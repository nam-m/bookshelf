import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro'

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import BookPreview from './features/bookshelf/book/BookPreview';
import useClickOutside from './utils/ClickOutside';
import popoverBackground from './utils/PopoverBackground';
import PopoverWrapper from './components/common/PopoverWrapper';
import BookForm from './features/bookshelf/BookForm';

const App = () => {
  const [bookPreview, setBookPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [addBook, setAddBook] = useState(false);
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
          addBook={addBook}
          ref={addRef}
        />
      </AddBookWrapper>
    </>
  );
};

const PreviewWrapper = styled(PopoverWrapper)``;

const AddBookWrapper = styled(PopoverWrapper)``;

export default App;
