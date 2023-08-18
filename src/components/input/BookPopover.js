import React from 'react';
import styled from 'styled-components/macro';

const BookPopover = ({popover, viewBooks, setShowPreview, setBookPreview, book}) => {
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  }
  
  if (viewBooks)
    return null;
  else
    if (!popover)
      return null;
    else
      return (
        <Wrapper>
          <PopoverInput 
            type='submit' 
            value='Quick look'
            onClick={() => 
              {
                setShowPreview(true);
                disableScroll();
                setBookPreview(book);
              }
            }
          />
        </Wrapper>
      );
};

const Wrapper = styled.div`
  position: absolute;
  top: 90%;
  /* Center popover wrapper by setting left and width */
  left: 5%;
  width: 90%;
`;

const PopoverInput = styled.input`
  position: relative;
  /* Take all width and height from wrapper*/
  width: 100%;
  border: 1px solid hsl(185deg, 5%, 50%);
  border-radius: 8px;
  cursor: pointer;

  /* Reduce brightness on hover */
  &:hover {
    background-color: hsl(185deg, 2%, 90%);
  }
`;

export default BookPopover;