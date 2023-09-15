import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/macro'

import Bookshelf from '../features/bookshelf/Bookshelf';

const Main = ({showPreview, setShowPreview, setBookPreview, setAddBook, sortBooks, setSortBooks}) => {
  const [sortId, setSortId] = useState('manual');
  const [viewBooks, setViewBooks] = useState(false);

  return (
    <MainWrapper>
      <Bookshelf 
        sortId={sortId} 
        setSortId={setSortId}
        sortBooks={sortBooks}
        setSortBooks={setSortBooks}
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