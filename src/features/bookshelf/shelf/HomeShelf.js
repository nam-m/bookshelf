import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ShelfDiv from './ShelfStyle';

const HomeShelf = ({setSelectedShelf}) => {
  const handleHomeShelf = () => {
    setSelectedShelf({})
  };

  return (
    <ShelfWrapper
      onClick={() => handleHomeShelf()}
    >
      All books
    </ShelfWrapper>
  );
};

const ShelfWrapper = styled(ShelfDiv)`
  ${p => (p.$selectedShelf) ? 
  `
    background-color: hsl(16deg, 100%, 60%);
    color: white;
  ` 
  : 
  `
    background-color: revert;
    color: revert;
  `
  };
`;

export default HomeShelf;