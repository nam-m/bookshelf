import React from "react";
import styled from 'styled-components/macro';

import BOOKS from "./data";
import Book from './Book';

const BookIndex = () => {
  return (
    <Wrapper>
      {/* Map fields of each instance `book` in BOOKS to <Book /> */}
      {BOOKS.map(book =>
        <BookWrapper>
          <Book {...book} />
        </BookWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BookWrapper = styled.div``;
export default BookIndex;
