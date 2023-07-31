import React from 'react';
import styled from 'styled-components/macro';

const BookPopover = ({popover, viewBooks}) => {
  return viewBooks ? null
  : (
    <Wrapper>
      <PopoverInput 
        type='submit' 
        value='Quick look'
        style={popover}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 65%;
  left: 0;
  right: 0;
`;

const PopoverInput = styled.input`
  /* position: absolute; */
  
  width: 95%;
  margin: auto;
  background-color: hsl(185deg, 5%, 95%);
  border: 1px solid hsl(185deg, 5%, 50%);
  border-radius: 8px;
  cursor: pointer;

  /* Reduce brightness on hover */
  &:hover {
    background-color: hsl(185deg, 2%, 90%);
  }
`;

export default BookPopover;