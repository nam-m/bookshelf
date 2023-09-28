import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ShelfForm from '../shelf/ShelfForm'
import ShelfView from '../shelf/ShelfView';
import ShelfDiv from './ShelfStyle';

const Shelf = ({
  shelf, 
  shelves, setShelves,
  selectedShelf,
  handleSelectedShelf
}) => {
  
  return (
    <ShelfWrapper
      $selectedShelf={selectedShelf}
      $shelf={shelf}
      onClick={() => {
        handleSelectedShelf(shelf);}}
    >
      {shelf.isEditing 
        ? 
        <ShelfForm 
          shelf={shelf}
          shelves={shelves}
          setShelves={setShelves}
        /> 
        : 
        <ShelfView 
          shelf={shelf}
          shelves={shelves}
          setShelves={setShelves}
        />
      }
    </ShelfWrapper>
  );
};

const ShelfWrapper = styled(ShelfDiv)`
  ${p => (p.$selectedShelf.id === p.$shelf.id) ? 
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


export default Shelf;