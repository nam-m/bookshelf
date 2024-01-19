import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';

import IconButton from './buttons/IconButton';
import Icon from './common/Icon';
import UnstyledButton from './buttons/UnstyledButton';

const Dropdown = ({ isOpen, setIsOpen, book, removeBook }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectDropdownItem = () => {
    setIsItemSelected(true);
  };

  return (
    <Wrapper>
      <DropdownButton
        onClick={() => {
          toggleDropdown();
        }}
      >
        <Icon id="menu" size={24} strokeWidth={2} />
      </DropdownButton>

      {isOpen && (
        <DropdownMenu>
          <DropdownItem
            as="button"
            onClick={() => {
              selectDropdownItem();
              removeBook(book);
            }}
          >
            Remove book
          </DropdownItem>
          <DropdownItem>Add to shelf</DropdownItem>
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
