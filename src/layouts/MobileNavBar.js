import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../utils/constants";

import Icon from "../components/common/Icon";

const MobileNavBar = () => {
  return (
    <Wrapper>
      <NavBar>
        <FeedNavLink href='/feed'>
          <Icon id='feed' />
          <NavLinkName>
            Discover
          </NavLinkName>
        </FeedNavLink>
        <HomeNavLink href='/home'>
          <Icon id='home' />
          <NavLinkName>
            Home
          </NavLinkName>
        </HomeNavLink>
        <ShelvesNavLink href='/shelves'>
          <Icon id='shelves' />
          <NavLinkName>
            Shelves
          </NavLinkName>
        </ShelvesNavLink>
      </NavBar>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid ${COLORS.gray[300]};
    isolation: isolate;
    background-color: ${COLORS.white};
  }
`;

const NavBar = styled.nav`
  display: flex;
  padding: 8px 4px;
`;

const NavLink = styled.a`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: inherit;

  &:link, &:visited {
    text-decoration: none;
  }
`;

const NavLinkName = styled.p`
  font-size: 0.875rem;
  margin-left: auto;
  margin-right: auto;
`;

const HomeNavLink = styled(NavLink)``;
const FeedNavLink = styled(NavLink)``;
const ShelvesNavLink = styled(NavLink)``;

export default MobileNavBar;