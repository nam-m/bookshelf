import React from 'react'
import styled from 'styled-components/macro'

import Bookshelf from './Bookshelf';

const Main = () => {
  const [sortId, setSortId] = React.useState('manual');

  return (
    <main>
      <Wrapper>
        <Bookshelf sortId={sortId} setSortId={setSortId}/>
      </Wrapper>
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