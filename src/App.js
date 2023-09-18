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
import useLocalStorage from './utils/UseLocalStorage';
import SideBar from './layouts/SideBar';

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
    <Wrapper>
      <LeftColumnTop>

      </LeftColumnTop>
      <LeftColumnBot>
        <SideBar/>
      </LeftColumnBot>
      <MainColumnTop>
        <Header />
      </MainColumnTop>
      <MainColumnBot>
        <Main
          showPreview={showPreview} 
          setShowPreview={setShowPreview}
          setBookPreview={setBookPreview}
          setAddBook={setAddBook}
          sortBooks={sortBooks}
          setSortBooks={setSortBooks}
        />
        <Footer />
      </MainColumnBot>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
`;

const LeftColumnTop = styled.div`
  border-right: 1px solid hsl(120deg 5% 5%);
`;

const LeftColumnBot = styled.div`
  /* flex: 1 1 400px; */
  padding-top: 16px;
  padding-right: 16px;
  border-right: 1px solid hsl(120deg 5% 5%);
`;

const MainColumnTop = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;

const MainColumnBot = styled.div`
  min-height: 100%;
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
