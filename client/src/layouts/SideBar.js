import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import IconButton from '../components/buttons/IconButton';
import Icon from '../components/common/Icon';
import { ShelfModel } from '../dataModels/ShelfModel';
import HomeShelf from '../features/bookshelf/shelf/HomeShelf';
import Shelf from '../features/bookshelf/shelf/Shelf';
import ShelfDiv from '../features/bookshelf/shelf/ShelfStyle';

const SideBar = ({
  selectedShelf,
  setSelectedShelf,
  areAllBooksSelected,
  setAreAllBooksSelected,
  shelves,
  setShelves,
}) => {
  const addShelf = () => {
    const newEmptyShelf = new ShelfModel(
      'shelf-'.concat(nanoid()),
      '',
      true,
      []
    );
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
    setAreAllBooksSelected(false);
    if (selectedShelf !== shelf) {
      setSelectedShelf(shelf);
    }
  };

  return (
    <Wrapper>
      <NavGroup>
        <HomeShelf
          selectedShelf={selectedShelf}
          setSelectedShelf={setSelectedShelf}
          areAllBooksSelected={areAllBooksSelected}
          setAreAllBooksSelected={setAreAllBooksSelected}
        />
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
