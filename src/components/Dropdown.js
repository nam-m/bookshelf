import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';

import IconButton from './buttons/IconButton';
import UnstyledButton from './buttons/UnstyledButton';
import Icon from './common/Icon';

const Dropdown = ({ book, removeBook, shelves, setShelves }) => {
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
          <DropdownItem
            onClick={() => {
              removeBook(book);
            }}
          >
            Remove book
          </DropdownItem>
          <DropdownButton onClick={() => toggleAddToShelfDropDown()}>
            Add to shelf
          </DropdownButton>
          {isShelfListOpen && (
            <DropdownMenu>
              {shelves.map((shelf) => (
                <DropdownItem as="div" shelf={{ ...shelf }} key={shelf.id}>
                  {shelf.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
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

const DropdownMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 4px;
  border-radius: 4px;
  list-style-type: none;
`;

const DropdownItem = styled(UnstyledButton)`
  /* display: flex; */
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${COLORS.gray[300]};
  }
`;

export default Dropdown;
