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
          <SearchBar type='text' placeholder='Search...'/>
        </Nav>
        
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
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  /* gap: 48px; */
`;

const NavItem = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
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

export default Header;