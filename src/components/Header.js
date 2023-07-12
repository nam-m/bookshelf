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
          <SearchBar type='text' placeholder='Search...'/>
          <Profile>Profile</Profile>
        </UserGroup>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 48px;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const NavItem = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

const UserGroup = styled.div`
  display: flex;
  gap: 32px;
`;

const SearchBar = styled.input`
  display: block;
  width: auto-fit;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);

  &:active {
    border: 1px solid hsl(220deg, 3%, 50%);
  }
`;

const Profile = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

export default Header;