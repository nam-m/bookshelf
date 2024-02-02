import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';

import IconButton from './buttons/IconButton';
import UnstyledButton from './buttons/UnstyledButton';
import Icon from './common/Icon';

const Dropdown = ({
  book,
  removeBook,
  addBookToShelf,
  shelves,
  setShelves,
}) => {
  // Control dropdown menu state
  const [isOpen, setIsOpen] = useState(false);
  const [isShelfListOpen, setIsShelfListOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAddToShelfDropDown = () => {
    setIsShelfListOpen(!isShelfListOpen);
  };

  return (
    <Wrapper>
      <DropdownButton onClick={() => toggleDropdown()}>
        <Icon id="menu" size={24} strokeWidth={2} />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => removeBook(book)}>
            Remove book
          </DropdownItem>
          <ShelfDropdownButton onClick={() => toggleAddToShelfDropDown()}>
            <AddToShelfLabel>Add to shelf</AddToShelfLabel>
            <Icon id="rightArrow" size={16} strokeWidth={2} />
          </ShelfDropdownButton>
          {isShelfListOpen && shelves.length > 0 && (
            <ShelfDropdownMenu>
              {shelves.map((shelf) => (
                <ShelfDropdownItem
                  shelf={{ ...shelf }}
                  key={shelf.id}
                  onClick={() => addBookToShelf(shelf.id, book)}
                >
                  {shelf.name}
                </ShelfDropdownItem>
              ))}
            </ShelfDropdownMenu>
          )}
        </DropdownMenu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const DropdownButton = styled(IconButton)`
  position: relative;
`;

const DropdownMenu = styled.menu`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
  list-style-type: none;
`;

const DropdownItem = styled(UnstyledButton)`
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${COLORS.gray[300]};
  }
`;

const ShelfDropdownButton = styled(DropdownItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const AddToShelfLabel = styled.label``;

const ShelfDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: 50%;
  left: 100%;
  z-index: 2;
  margin-top: -2px;
`;

const ShelfDropdownItem = styled(DropdownItem)``;

export default Dropdown;
