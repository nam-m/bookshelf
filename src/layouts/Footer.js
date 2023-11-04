import React from 'react'
import styled from 'styled-components/macro'
import { QUERIES } from '../utils/constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <Info>
        <span>
          &copy;2023 Nam Mai
        </span>
        <span>
          All Rights Reserved
        </span>
      </Info>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* Placeholder height */
  height: 100px;  
  border-top: 1px solid hsl(120deg 5% 5%);
  /* padding: 0 80px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.tabletAndDown} {
    margin-bottom: 60px;
  }

  @media ${QUERIES.mobileAndDown} {
    justify-content: revert;
    align-items: revert;
  }
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${QUERIES.mobileAndDown} {
    /* padding-top: 10px; */
    flex-direction: column;
    align-items: flex-start;
    gap: revert;
  }
`;

export default Footer;