import React from 'react';
import styled from 'styled-components/macro';

const BookPopover = ({popover, viewBooks}) => {
  if (viewBooks)
    return null;
  else
    if (popover === 'false')
      return null;
    else
      return (
        <Wrapper>
          <PopoverInput 
            type='submit' 
            value='Quick look'
          />
        </Wrapper>
      );
};

const Wrapper = styled.div`
  /* display: block; */
  position: absolute;
  top: 65%;
  left: 0;
  right: 0;
`;

const PopoverInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  border: 1px solid hsl(185deg, 5%, 50%);
  border-radius: 8px;
  cursor: pointer;

  /* Reduce brightness on hover */
  &:hover {
    background-color: hsl(185deg, 2%, 90%);
  }
`;

export default BookPopover;