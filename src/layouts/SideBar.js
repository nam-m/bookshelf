import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';

import SHELVES from '../data/ShelfData';
import ShelfForm from '../features/bookshelf/shelf/ShelfForm';
import ShelfView from '../features/bookshelf/shelf/ShelfView';

const SideBar = () => {
  const [shelves, setShelves] = useState(SHELVES);

  const addShelf = () => {
    const newEmptyShelf = { 
      name: '',
      id: `shelf-${nanoid()}`,
      isEditing: true,
      books: ''
    };
    // console.log('All shelves after adding: ', [...shelves, newEmptyShelf]);
    setShelves([...shelves, newEmptyShelf]);
  } 

  const deleteShelf = (id) => {
    const remainingShelves = shelves.filter(shelf => id !== shelf.id);
    setShelves(remainingShelves);
  }

  const editShelf = (id, newShelfName) => {
    const editedShelves = shelves.map(shelf => {
      if (id === shelf.id)
        return { ...shelf, name: newShelfName };
      else
        return shelf;
    })
    setShelves(editedShelves);
  }
  
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
        {shelves.map(shelf =>
          <Shelf
            key={shelf.id}
          >
            {shelf.isEditing 
              ? 
              <ShelfForm 
                shelf={{...shelf}}
                shelves={shelves}
                setShelves={setShelves}
              /> 
              : 
              <ShelfView 
                shelf={{...shelf}}
                shelves={shelves}
                setShelves={setShelves}
              />
            }
          </Shelf>
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

const Item = styled.div`
  --item-width: 8em;

  display: block;
  text-decoration: none;
  color: black;
  /* line-height: 1; */
  width: 100%;
  padding: 16px;
  border-radius: 0 calc(var(--item-width)/2) calc(var(--item-width)/2) 0;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: hsl(16deg, 100%, 60%);
    color: white;
  }
`;

const CreateShelf = styled(Item)`
  text-align: start;
`;

const AllBooks = styled(Item)`
  font-weight: 600;
`;

const Shelf = styled(Item)``;

export default SideBar;