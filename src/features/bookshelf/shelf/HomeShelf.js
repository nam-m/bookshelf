import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ShelfDiv from './ShelfStyle';

const HomeShelf = ({selectedShelf, setSelectedShelf}) => {
  // Set selectedShelf to empty object when user selects HomeShelf
  const handleHomeShelf = () => {
    setSelectedShelf({});
  };

  return (
    <ShelfWrapper
      $selectedShelf={selectedShelf}
      onClick={() => handleHomeShelf()}
    >
      All books
    </ShelfWrapper>
  );
};

const ShelfWrapper = styled(ShelfDiv)`
  ${p => (Object.keys(p.$selectedShelf).length === 0) ? 
  `
    background-color: hsl(16deg, 100%, 60%);
    color: white;
    font-weight: 700;
  ` 
  : 
  `
    background-color: revert;
    color: revert;
    font-weight: revert;
  `
  };
`;

export default HomeShelf;