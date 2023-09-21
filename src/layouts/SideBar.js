import React from 'react';
import styled from 'styled-components/macro';
import CreateButton from '../components/common/CreateButton';

const SideBar = ({shelves}) => {
  return (
    <Wrapper>
      <CreateShelf 
        as='button'
      >
        Create new shelf
      </CreateShelf>
      <ShelfList>
        <AllBooks>
          All books
        </AllBooks>
        {shelves.map(shelf =>
          <Shelf
            id={shelf.id}
            key={shelf.id}
          >
            {shelf.name}
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

const Item = styled.li`
  --item-width: 8em;

  width: 100%;
  padding: 16px;
  border-radius: 0 calc(var(--item-width)/2) calc(var(--item-width)/2) 0;
;
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

const ShelfList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Shelf = styled(Item)``;

export default SideBar;