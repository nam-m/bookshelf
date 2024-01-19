import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';

import SHELVES from '../data/ShelfData';
import ShelfDiv from '../features/bookshelf/shelf/ShelfStyle';
import Shelf from '../features/bookshelf/shelf/Shelf';
import HomeShelf from '../features/bookshelf/shelf/HomeShelf';
import Icon from '../components/common/Icon';
import IconButton from '../components/buttons/IconButton';

const SideBar = ({ selectedShelf, setSelectedShelf }) => {
  const [shelves, setShelves] = useState(SHELVES);
  // const [isEditing, setIsEditing] = useState(false);

  const addShelf = () => {
    const newEmptyShelf = {
      name: '',
      id: `shelf-${nanoid()}`,
      isEditing: true,
      books: '',
    };
    // console.log('All shelves after adding: ', [...shelves, newEmptyShelf]);
    setShelves([...shelves, newEmptyShelf]);
  };

  const editShelf = (id, newShelfName) => {
    const editedShelves = shelves.map((shelf) => {
      if (id === shelf.id) return { ...shelf, name: newShelfName };
      else return shelf;
    });
    setShelves(editedShelves);
  };

  // Select shelf if not selected, and unselect it
  const handleSelectedShelf = (shelf) => {
    if (selectedShelf !== shelf) setSelectedShelf(shelf);
  };

  return (
    <Wrapper>
      <NavGroup>
        <HomeShelf
          selectedShelf={selectedShelf}
          setSelectedShelf={setSelectedShelf}
        />
        {/* <WantToReadShelf>

        </WantToReadShelf>
        <ReadingShelf>

        </ReadingShelf>
        <FinishedReadingShelf>

        </FinishedReadingShelf> */}
      </NavGroup>
      <NavGroup>
        <CreateShelf as="button" onClick={() => addShelf()}>
          <CreateShelfTitle>Create new shelf</CreateShelfTitle>
          <CreateShelfIconWrapper as="div">
            <CreateShelfIcon id="add" size={24} strokeWidth={2} />
          </CreateShelfIconWrapper>
        </CreateShelf>
        {shelves.map((shelf) => (
          <Shelf
            shelf={{ ...shelf }}
            key={shelf.id}
            shelves={shelves}
            setShelves={setShelves}
            selectedShelf={selectedShelf}
            handleSelectedShelf={handleSelectedShelf}
          />
        ))}
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

const NavGroup = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CreateShelf = styled(ShelfDiv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CreateShelfTitle = styled.span``;

const CreateShelfIconWrapper = styled(IconButton)`
  transform: translateX(-60%);

  &:hover {
    background-color: hsl(16deg, 100%, 60%);
  }
`;

const CreateShelfIcon = styled(Icon)`
  &:hover {
    color: white;
  }
`;

export default SideBar;
