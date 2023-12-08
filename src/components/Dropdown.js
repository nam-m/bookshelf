import React from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';

import IconButton from './buttons/IconButton';
import Icon from './common/Icon';

const Dropdown = ({ isOpen, setIsOpen }) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <DropdownButton
        onClick={() => {
          toggleDropdown();
          console.log('clicked');
        }}
      >
        <Icon id="menu" size={24} strokeWidth={2} />
      </DropdownButton>

      {isOpen && (
        <DropdownMenu>
          <DropdownItem>
            <a href="#">Option 1</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#">Option 2</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#">Option 3</a>
          </DropdownItem>
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

const DropdownMenu = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  list-style-type: none;
`;

const DropdownItem = styled.li`
  &:hover {
    background-color: ${COLORS.gray[200]};
  }
`;

export default Dropdown;
