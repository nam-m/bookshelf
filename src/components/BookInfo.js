import React from "react";
import styled from "styled-components/macro";

const BookInfo = ({title, author, pages, viewBooks}) => {
  return (
    <Wrapper $viewBooks={viewBooks}>
      <Title>{title}</Title>
      <Author><em>{author}</em></Author>
      <Pages>{pages} pages</Pages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Add overflow to prevent long text from breaking parent component width */
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${p => p.$viewBooks
  ?
  `
    margin-top: -6px;
  `
  :
  ``
  };
`;

const Title = styled.h2`
  overflow-wrap: break-word;
`;

const Author = styled.h3``;

const Pages = styled.h4``;

export default BookInfo;