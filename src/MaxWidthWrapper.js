import React from 'react'
import styled from 'styled-components/macro'

import Bookshelf from './Bookshelf';

const MaxWidthWrapper = () => {
  return (
    <Wrapper>
      <Bookshelf />
    </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 64px 32px;
  display: flex;
`;

export default MaxWidthWrapper;