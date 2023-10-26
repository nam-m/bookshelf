import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../utils/constants";

const MobileNavBar = () => {
  return (
    <Wrapper>
      <NavBar>

      </NavBar>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: none;
  @media ${QUERIES.mobileAndDown} {
    display: revert;
  }
`;

const NavBar = styled.nav``;

export default MobileNavBar;