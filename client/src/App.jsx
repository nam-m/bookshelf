import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components/macro';

import { BooksProvider } from './contexts/BooksContext';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';
import MobileNavBar from './layouts/MobileNavBar';
import SideBar from './layouts/SideBar';
import useClickOutside from './utils/UseClickOutside';
import { QUERIES } from './utils/constants';

const App = () => {
  const [bookToPreview, setBookToPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [addBook, setAddBook] = useState(false);
  const [shelves, setShelves] = useState([]);
  const [selectedShelf, setSelectedShelf] = useState({});
  const [areAllBooksSelected, setAreAllBooksSelected] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const ref = useRef();
  useClickOutside(ref, () => {
    setShowSearchResults(false);
    setShowPreview(false);
    setAddBook(false);
  });

  return (
    <BooksProvider>
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
              addBook={addBook}
              setAddBook={setAddBook}
              addRef={ref}
              searchDropdownRef={ref}
              showSearchResults={showSearchResults}
            />
            <Main
              showPreview={showPreview}
              setShowPreview={setShowPreview}
              bookToPreview={bookToPreview}
              setBookToPreview={setBookToPreview}
              selectedShelf={selectedShelf}
              previewRef={ref}
              areAllBooksSelected={areAllBooksSelected}
              shelves={shelves}
              setShelves={setShelves}
            />
            <Footer />
          </MainColumn>
        </Wrapper>
        <MobileNavBar />
      </AppWrapper>
    </BooksProvider>
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
