import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';
import CreateButton from '../components/common/CreateButton';
import ShelfForm from '../features/bookshelf/shelf/ShelfForm';
import ShelfView from '../features/bookshelf/shelf/ShelfView';

const SideBar = ({shelves, setShelves}) => {
  const [isEditing, setEditing] = useState(false);

  const addShelf = () => {
    const newShelf = { 
      id: `shelf-${nanoid()}`,
      name: '',
      isEditing: true,
      books: [] 
    };

    setShelves([...shelves, newShelf]);
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
            {shelf.isEditing ? <ShelfForm /> : <ShelfView shelfName={shelf.name}/>}
          </Shelf>
        )}
      </NavGroup>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
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