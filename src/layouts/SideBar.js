import React from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';
import CreateButton from '../components/common/CreateButton';

const SideBar = ({shelves, setShelves}) => {
  const addShelf = (newShelfName) => {
    const newShelf = { id: `shelf-${nanoid()}`, name: newShelfName, books: [] };
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
      <CreateShelf 
        as='button'
        onClick={addShelf}
      >
        Create new shelf
      </CreateShelf>
      <ShelfList>
        <AllBooks>
          All books
        </AllBooks>
        {shelves.map(shelf =>
          <Shelf
            href={'/' + shelf.id}
            id={shelf.id}
            key={shelf.id}
          >
            {shelf.name}
            <ShelfAction>
              <EditShelf>
                Edit
              </EditShelf>
              <DeleteShelf>
                Delete
              </DeleteShelf>
            </ShelfAction>
          </Shelf>)
        }
      </ShelfList>
      
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
`;

const Item = styled.a`
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
    font-weight: 700;
    color: white;
  }

  &:focus {
    background-color: hsl(16deg, 100%, 50%);
    font-weight: 700;
    color: white;
  }
`;

const CreateShelf = styled(Item)`
  text-align: start;
`;

const AllBooks = styled(Item)`
  font-weight: 600;
`;

const ShelfList = styled.nav``;

const Shelf = styled(Item)``;

const ShelfAction = styled.div``;

const EditShelf = styled.button``;

const DeleteShelf = styled.button``;

export default SideBar;