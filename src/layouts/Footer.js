import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
    return (
      <footer>
        <Wrapper>
          <Info>
            &copy;2023 Nam Mai | All Rights Reserved
          </Info>
        </Wrapper>
      </footer>
    );
};

const Wrapper = styled.div`
  /* Placeholder height */
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid hsl(120deg 5% 5%);
`;

const Info = styled.p`

`;

export default Footer;