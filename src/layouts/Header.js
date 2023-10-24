import React from 'react';
import styled from 'styled-components/macro';

import AddBookButton from '../components/buttons/AddBookButton';
import Icon from "../components/common/Icon";
import IconButton from '../components/buttons/IconButton';

const Header = ({setAddBook}) => {
  return (
    <Wrapper>
      <SearchLabel htmlFor='search'>
        <SearchBar type='text' id='search' placeholder='Search...'/>
        <SearchIcon id='search' size={16} strokeWidth={2}/>
      </SearchLabel>
      
      <SideGroup>
        <AddBookButton setAddBook={setAddBook}/>
        <Profile>Profile</Profile>
      </SideGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  gap: clamp(0.25rem, 5%, 4rem);
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid hsl(120deg 5% 5%);
`;

const SideGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

const SearchLabel = styled.label`
  //Set position to relative to contain absolute-positioned search icon
  position: relative;
  flex-grow: 1;
`;

const SearchBar = styled.input`
  line-height: 1.5rem;
  width: 100%;
  padding: 8px;
  padding-left: 32px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
  outline-offset: 4px;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  margin-left: 8px;
`;

const Profile = styled.a`
  text-decoration: none;
`;

export default Header;