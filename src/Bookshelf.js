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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

const BookWrapper = styled.div`
  
`;

export default Bookshelf;
