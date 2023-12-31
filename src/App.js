import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from './utils/constants';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import BookPreview from './features/bookshelf/book/BookPreview';
import useClickOutside from './utils/UseClickOutside';
import popoverBackground from './utils/PopoverBackground';
import PopoverWrapper from './components/common/PopoverWrapper';
import BookForm from './features/form/BookForm';
import useLocalStorage from './utils/UseLocalStorage';
import SideBar from './layouts/SideBar';
import MobileNavBar from './layouts/MobileNavBar';

const App = () => {
  const [bookPreview, setBookPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [addBook, setAddBook] = useState(false);
  const [books, setBooks] = useLocalStorage('books', []);
  const [selectedShelf, setSelectedShelf] = useLocalStorage('selectedShelf', {});

  const previewRef = useRef();
  const addRef = useRef();
  
  useClickOutside(previewRef, () => setShowPreview(false));
  useClickOutside(addRef, () => setAddBook(false));
  // popoverBackground(showPreview);

  return (
    <AppWrapper>
      <Wrapper>
        <LeftColumn>
          <SideBarTitle>
            Bookshelf
          </SideBarTitle>
          <SideBar 
            selectedShelf={selectedShelf}
            setSelectedShelf={setSelectedShelf}
          />
        </LeftColumn>
        <MainColumn>
          <Header
            books={books}
            setBooks={setBooks} 
            addBook={addBook}
            setAddBook={setAddBook}
            addRef={addRef}
          />
          <Main
            showPreview={showPreview} 
            setShowPreview={setShowPreview}
            bookPreview={bookPreview}
            setBookPreview={setBookPreview}
            selectedShelf={selectedShelf}
            books={books}
            setBooks={setBooks}
            previewRef={previewRef}
          />
          <Footer />
        </MainColumn>
        {/* <PreviewWrapper $showPreview={showPreview}>
          <BookPreview 
            bookPreview={bookPreview}
            showPreview={showPreview}
            ref={previewRef}
          />
        </PreviewWrapper>
        <AddBookWrapper $addBook={addBook}>
          <BookForm 
            books={books}
            setBooks={setBooks}
            addBook={addBook}
            setAddBook={setAddBook}
            ref={addRef}
          />
        </AddBookWrapper> */}
      </Wrapper>
      <MobileNavBar />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
`;

const Wrapper = styled.div`
  display: grid;
  height: inherit;
  overflow: inherit;
  grid-auto-flow: column;
  grid-template-columns: minmax(14rem, 1fr) 5fr;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: revert;
  }
`;

const LeftColumn = styled.div`
  padding-right: 16px;
  border-right: 1px solid hsl(120deg 5% 5%);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const SideBarTitle = styled.h1`
  padding-top: 32px;
  padding-left: 16px;
  padding-bottom: 32px;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 40px;
  padding-right: 40px;
`;

const PreviewWrapper = styled(PopoverWrapper)`
  /* Make it visible when passed prop is true and vice versa*/
  visibility: ${p => p.$showPreview ? 'visible' : 'hidden'};
`;

const AddBookWrapper = styled(PopoverWrapper)`
  /* Make it visible when passed prop is true and vice versa*/
  visibility: ${p => p.$addBook ? 'visible' : 'hidden'};
`;

export default App;
