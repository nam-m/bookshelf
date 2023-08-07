import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/macro'

import Bookshelf from './Bookshelf';
import BOOKS from '../data';
import BookPreview from '../BookPreview';

const Main = () => {
  const [sortId, setSortId] = useState('manual');
  const [sortBooks, setSortBooks] = useState(BOOKS);
  const [viewBooks, setViewBooks] = useState(false);
  const [preview, setPreview] = useState(false);

  return (
    <main>
      <Wrapper>
        <Bookshelf 
          sortId={sortId} 
          setSortId={setSortId}
          sortBooks={sortBooks}
          setSortBooks={setSortBooks}
          viewBooks={viewBooks}
          setViewBooks={setViewBooks}
          setPreview={setPreview}
          />
      </Wrapper>
      <BookPreview
        preview={preview}
      />
    </main>
    );
};

const Wrapper = styled.div`
  /* Center the wrapper by setting left & right margins to auto*/
  margin-left: auto;
  margin-right: auto;
  padding: 0 80px;
  display: flex;
`;

export default Main;