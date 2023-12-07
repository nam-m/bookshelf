import React from 'react';
import styled from 'styled-components';

import SortSvgComponent from '../../components/svg/SortSvgComponent';

const SortDirection = () => {
  return (
    <Button>
      <SortSvgComponent />
    </Button>
  );
};

const Button = styled.button`
  svg {
    background-color: hsl(185deg, 5%, 90%);
    margin-left: auto;
    margin-right: auto;
    border: 0;
    border-radius: 8px;
    fill: orangered;
    cursor: pointer;
  }
`;

export default SortDirection;
