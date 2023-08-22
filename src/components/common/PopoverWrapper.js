// import React from 'react'
import styled from 'styled-components/macro';

const PopoverWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  /* Make background more opague when popover is on */
  background: hsl(0deg 0% 0% / 0.35);

  /* Make it visible when passed prop is true and vice versa*/
  visibility: ${p => p.$showPreview ? 'visible' : 'hidden'};
`;

export default PopoverWrapper;