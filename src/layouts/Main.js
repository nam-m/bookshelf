import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/macro'

import Bookshelf from '../features/bookshelf/Bookshelf';

const Main = ({
  showPreview, setShowPreview, 
  bookPreview, setBookPreview, 
  selectedShelf, 
  books, setBooks, 
  previewRef}) => {
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
        bookPreview={bookPreview}
        setBookPreview={setBookPreview}
        previewRef={previewRef}
      />
    </MainWrapper>
    );
};

const MainWrapper = styled.main`
  height: 100%;
`;

export default Main;