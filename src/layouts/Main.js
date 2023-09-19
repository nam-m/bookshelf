import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/macro'

import Bookshelf from '../features/bookshelf/Bookshelf';

const Main = ({showPreview, setShowPreview, setBookPreview, setAddBook, books, setBooks}) => {
  const [sortId, setSortId] = useState('manual');
  const [viewBooks, setViewBooks] = useState(false);

  return (
    <MainWrapper>
      <Bookshelf 
        sortId={sortId} 
        setSortId={setSortId}
        books={books}
        setBooks={setBooks}
        viewBooks={viewBooks}
        setViewBooks={setViewBooks}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        setBookPreview={setBookPreview}
        setAddBook={setAddBook}
      />
    </MainWrapper>
    );
};

const MainWrapper = styled.main`
  height: 100%;
`;

export default Main;