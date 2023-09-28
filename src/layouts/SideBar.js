import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';

import SHELVES from '../data/ShelfData';
import ShelfDiv from '../features/bookshelf/shelf/ShelfStyle';
import Shelf from '../features/bookshelf/shelf/Shelf';

const SideBar = ({selectedShelf, setSelectedShelf}) => {
  const [shelves, setShelves] = useState(SHELVES);
  // const [isEditing, setIsEditing] = useState(false);
  
  const addShelf = () => {
    const newEmptyShelf = { 
      name: '',
      id: `shelf-${nanoid()}`,
      isEditing: true,
      books: ''
    };
    // console.log('All shelves after adding: ', [...shelves, newEmptyShelf]);
    setShelves([...shelves, newEmptyShelf]);
  }; 

  const deleteShelf = (id) => {
    const remainingShelves = shelves.filter(shelf => id !== shelf.id);
    setShelves(remainingShelves);
  };

  const editShelf = (id, newShelfName) => {
    const editedShelves = shelves.map(shelf => {
      if (id === shelf.id)
        return { ...shelf, name: newShelfName };
      else
        return shelf;
    })
    setShelves(editedShelves);
  };

  const handleSelectedShelf = (shelf) => {
    if (selectedShelf === shelf)
      setSelectedShelf();
    else
      setSelectedShelf(shelf);
  };

  return (
    <Wrapper>
      <NavGroup>
        <AllBooks>
          All books
        </AllBooks>
      </NavGroup>
      <NavGroup>
        <CreateShelf 
          as='button'
          onClick={() => {
            addShelf();
          }}
        >
          Create new shelf
        </CreateShelf>
        {shelves.map((shelf) =>
          <Shelf
            shelf={{...shelf}}
            key={shelf.id}
            shelves={shelves}
            setShelves={setShelves}
            selectedShelf={selectedShelf}
            handleSelectedShelf={handleSelectedShelf}
          />
        )}
      </NavGroup>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`;

const NavGroup = styled.nav``;

const CreateShelf = styled(ShelfDiv)`
  text-align: start;
`;

const AllBooks = styled(ShelfDiv)`
  font-weight: 600;
`;

export default SideBar;