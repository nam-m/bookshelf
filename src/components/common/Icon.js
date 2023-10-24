import React from 'react';
import styled from 'styled-components/macro';
import {
  Check,
  X,
  Edit2,
  Plus,
  Search,
  User
} from 'react-feather';

const icons = {
  check: Check,
  cancel: X,
  edit: Edit2,
  add: Plus,
  search: Search,
  user: User
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;

export default Icon;
