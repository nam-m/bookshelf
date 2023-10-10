import React from 'react';
import styled from 'styled-components/macro';

import AddBookButton from '../features/bookshelf/AddBookButton';

const Header = ({setAddBook}) => {
  return (
    <Wrapper>
      <SearchLabel htmlFor='search'/>
      <SearchBar type='text' id='search' placeholder='Search...'/>
      <SideGroup>
        <AddBookButton setAddBook={setAddBook}/>
        <Profile>Profile</Profile>
      </SideGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid hsl(120deg 5% 5%);
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
`;

const SideGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

const SearchLabel = styled.label`
  display: none;
`;

const SearchBar = styled.input`
  flex: 1;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
  outline-offset: 4px;
`;

const Profile = styled.a`
  text-decoration: none;
`;

export default Header;