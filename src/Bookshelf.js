import React from "react";
import styled from 'styled-components/macro';

import BOOKS from "./data";
import Book from './Book';

const Bookshelf = () => {
  return (
    <Wrapper>
      {/* Map fields of each instance `book` in BOOKS to <Book /> */}
      {BOOKS.map(book =>
        <BookWrapper key={book.name}>
          <Book {...book} />
        </BookWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BookWrapper = styled.div``;

export default Bookshelf;
