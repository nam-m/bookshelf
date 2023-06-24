import React from 'react'
import styled from 'styled-components'

import Book from './Book';

const MaxWidthWrapper = () => {
  return (
    <Wrapper>
      <SortHeader>
        <BookIndex>
          <Book></Book>
        </BookIndex>
      </SortHeader>
    </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 64px 32px;
  display: flex;
`
const SortHeader = styled.div`
  
`
export default MaxWidthWrapper;