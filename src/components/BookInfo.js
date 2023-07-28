import React from "react";
import styled from "styled-components/macro";

const BookInfo = ({title, author, pages, viewBooks}) => {
  return (
    <Wrapper viewBooks={viewBooks}>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Pages>{pages} pages</Pages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.h3``;

const Author = styled.h3``;

const Pages = styled.h5``;

export default BookInfo;