import React from 'react'
import styled from 'styled-components/macro'

const Book = ({name, author, imageSrc}) => {
  return (
    <>
      <ImageWrapper>
        <Image alt="" src={imageSrc} />
      </ImageWrapper>
    </>
  );
};

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 30%;
`;

export default Book;