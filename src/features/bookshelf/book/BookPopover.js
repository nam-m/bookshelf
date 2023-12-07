import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../../utils/constants';
import BookPreview from './BookPreview';

const BookPopover = ({
  showPreview,
  setShowPreview,
  setBookPreview,
  book,
  previewRef,
}) => {
  return (
    <>
      <Wrapper>
        <PopoverInput
          type="submit"
          value="Quick look"
          onClick={() => {
            setShowPreview(true);
            // popoverBackground(showPreview);
            setBookPreview(book);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 90%;
  /* Center popover wrapper by setting left and width */
  left: 5%;
  width: 90%;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
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
