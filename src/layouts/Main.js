import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Bookshelf from '../features/bookshelf/Bookshelf';

const Main = ({
  showPreview,
  setShowPreview,
  bookToPreview,
  setBookToPreview,
  selectedShelf,
  books,
  setBooks,
  previewRef,
  areAllBooksSelected,
  shelves,
  setShelves,
}) => {
  const [sortId, setSortId] = useState('manual');
  const [viewBooks, setViewBooks] = useState(false);

  return (
    <MainWrapper>
      <Bookshelf
        sortId={sortId}
        setSortId={setSortId}
        selectedShelf={selectedShelf}
        books={books}
        setBooks={setBooks}
        viewBooks={viewBooks}
        setViewBooks={setViewBooks}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        bookToPreview={bookToPreview}
        setBookToPreview={setBookToPreview}
        previewRef={previewRef}
        areAllBooksSelected={areAllBooksSelected}
        shelves={shelves}
        setShelves={setShelves}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  height: 100%;
`;

export default Main;
