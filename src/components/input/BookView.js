import React from 'react';
import styled from 'styled-components';

const BookView = () => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id="view-toggle" className='toggle'/>
      <Label htmlFor="view-toggle" className='toggle'></Label>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
`;

const Label = styled.label`
  --toggle-width: 5.5em;
  --toggle-height: 3em;
  --toggle-padding: 4px;

  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);
  border-radius: calc(var(--toggle-width)/2);
  padding: var(--toggle-padding);
  background-color: hsl(185deg, 5%, 90%);
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    background-color: orangered;
    width: calc((var(--toggle-width) - var(--toggle-padding)*2)/2);
    height: calc(var(--toggle-height) - var(--toggle-padding)*2);
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const Checkbox = styled.input`
  /* Hide default box from layout completly */
  display: none;

  &:checked + ${Label}::after {
    transform: translateX(100%);
  }
`;

export default BookView;