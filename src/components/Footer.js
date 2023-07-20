import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
    return (
      <footer>
        <Wrapper></Wrapper>
      </footer>
    );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 80px;
  display: flex;
`;

export default Footer;