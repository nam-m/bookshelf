import React from 'react'
import styled from 'styled-components/macro'

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Nav>
          <NavItem href='/Home'>Home</NavItem>
          <NavItem href='/Collections'>Collections</NavItem>
          <NavItem href='/Notes'>Notes</NavItem>
        </Nav>
        <UserGroup>
          <SearchLabel htmlFor='search'/>
          <SearchBar type='text' id='search' placeholder='Search...'/>
          <Profile>Profile</Profile>
        </UserGroup>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 80px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.25rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
`;

const UserGroup = styled.div`
  display: flex;
  gap: 32px;
`;

const SearchLabel = styled.label`
  display: none;
`;

const SearchBar = styled.input`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
  outline-offset: 4px;
`;

const Profile = styled.a`
  /* font-size: 1.5rem; */
  text-decoration: none;
  color: black;
`;

export default Header;