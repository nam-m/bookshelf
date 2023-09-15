import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <FooterWrapper>
      <Info>
        &copy;2023 Nam Mai | All Rights Reserved
      </Info>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* Placeholder height */
  height: 100px;  
  border-top: 1px solid hsl(120deg 5% 5%);
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.p`

`;

export default Footer;