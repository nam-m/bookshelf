import React from 'react'
import styled from 'styled-components/macro'

const Header = () => {
  return (
    <header>
      <Wrapper>
        <HeaderLink href='/Home'>Home</HeaderLink>
        <HeaderLink href='/Collections'>Collections</HeaderLink>
        <HeaderLink href='/Notes'>Notes</HeaderLink>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.nav`
  padding: 48px;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const HeaderLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

export default Header;