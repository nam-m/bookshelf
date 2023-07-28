import React from "react";
import styled from "styled-components/macro";

const BookInfo = ({title, author, pages, viewBooks}) => {
  return (
    <Wrapper viewBooks={viewBooks}>
      <Title>{title}</Title>
      <Author><em>{author}</em></Author>
      <Pages>{pages} pages</Pages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${p => p.viewBooks
  ?
  `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `
  :
  ``
  };
`;

const Title = styled.h2``;

const Author = styled.h3``;

const Pages = styled.h4``;

export default BookInfo;