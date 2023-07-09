import React from 'react'
import styled from 'styled-components/macro'

import Bookshelf from '../components/Bookshelf';

/* Create a container with maximum width for children elements*/
const MaxWidthWrapper = () => {
  const [sortId, setSortId] = React.useState('manual');

  return (
    <Wrapper>
      <Bookshelf sortId={sortId} setSortId={setSortId}/>
    </Wrapper>
    );
};

const Wrapper = styled.div`
  /* Center the wrapper by setting left & right margins to auto*/
  margin-left: auto;
  margin-right: auto;
  padding: 64px 32px;
  display: flex;
`;

export default MaxWidthWrapper;