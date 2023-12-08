import React from 'react';
import {
  Check,
  Edit2,
  Home,
  Layers,
  Menu,
  Plus,
  Search,
  Trello,
  User,
  X,
} from 'react-feather';
import styled from 'styled-components/macro';

const icons = {
  check: Check,
  cancel: X,
  edit: Edit2,
  add: Plus,
  search: Search,
  user: User,
  home: Home,
  shelves: Layers,
  feed: Trello,
  menu: Menu,
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
