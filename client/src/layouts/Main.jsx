import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Bookshelf from '../features/bookshelf/Bookshelf';

const Main = ({
  showPreview,
  setShowPreview,
  bookToPreview,
  setBookToPreview,
  selectedShelf,
  previewRef,
  areAllBooksSelected,
  shelves,
  setShelves,
}) => {
  const [viewBooks, setViewBooks] = useState(false);

  return (
    <MainWrapper>
      <Bookshelf
        selectedShelf={selectedShelf}
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
