import React from "react";
import styled from "styled-components";

const BookPopover = () => {
  return (
    <Wrapper className="invisible">
      <PopoverInput 
        type='submit' 
        value='Quick look'
        onClick={() => alert('Clicked!')}
        />
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

const PopoverInput = styled.input`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
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