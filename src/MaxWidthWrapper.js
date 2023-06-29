import React from 'react'
import styled from 'styled-components/macro'

import BookIndex from './BookIndex';

const MaxWidthWrapper = () => {
  return (
    <Wrapper>
      <BookIndex />
    </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 64px 32px;
  display: flex;
`;

export default MaxWidthWrapper;