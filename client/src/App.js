import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';
import MobileNavBar from './layouts/MobileNavBar';
import SideBar from './layouts/SideBar';
import bookService from './services/BookServices';
import useClickOutside from './utils/UseClickOutside';
import useLocalStorage from './utils/UseLocalStorage';
import { QUERIES } from './utils/constants';

const App = () => {
  const [bookToPreview, setBookToPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [addBook, setAddBook] = useState(false);
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useLocalStorage('shelves', []);
  const [selectedShelf, setSelectedShelf] = useLocalStorage(
    'selectedShelf',
    {}
  );
  const [areAllBooksSelected, setAreAllBooksSelected] = useState(false);

  const previewRef = useRef();
  const addRef = useRef();

  useClickOutside(previewRef, () => setShowPreview(false));
  useClickOutside(addRef, () => setAddBook(false));

  useEffect(() => {
    bookService.getAllBooks().then((initialBooks) => {
      setBooks(initialBooks);
    });
  }, []);

  return (
    <AppWrapper>
      <Wrapper>
        <LeftColumn>
          <SideBarTitle>Bookshelf</SideBarTitle>
          <SideBar
            selectedShelf={selectedShelf}
            setSelectedShelf={setSelectedShelf}
            areAllBooksSelected={areAllBooksSelected}
            setAreAllBooksSelected={setAreAllBooksSelected}
            shelves={shelves}
            setShelves={setShelves}
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
            bookToPreview={bookToPreview}
            setBookToPreview={setBookToPreview}
            selectedShelf={selectedShelf}
            books={books}
            setBooks={setBooks}
            previewRef={previewRef}
            areAllBooksSelected={areAllBooksSelected}
            shelves={shelves}
            setShelves={setShelves}
          />
          <Footer />
        </MainColumn>
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

export default App;
