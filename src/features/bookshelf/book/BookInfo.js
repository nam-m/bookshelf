import React from 'react';
import styled from 'styled-components/macro';

const BookInfo = ({ book, viewBooks }) => {
  return (
    <Wrapper $viewBooks={viewBooks}>
      <Title>{book.title}</Title>
      <Author>
        <em>{book.author}</em>
      </Author>
      <Pages>{book.pages} pages</Pages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Add overflow to prevent long text from breaking parent component width */
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h2`
  overflow-wrap: break-word;
`;

const Author = styled.h3``;

const Pages = styled.h4``;

export default BookInfo;
