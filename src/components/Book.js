import React from 'react'
import styled from 'styled-components/macro'

const Book = ({name, author, imageSrc}) => {
  return (
    <Link>
      <ImageWrapper>
        <Image alt='' src={imageSrc} />
      </ImageWrapper>
      <Name>{name}</Name>
      <Author>{author}</Author>
    </Link>
  );
};

const Link = styled.a``;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  /* Hide image that extends beyong this wrapper */
  overflow: hidden;

  &:hover {
    box-shadow: 4px 4px 10px hsl(180deg, 5%, 50%);
    /* transform: skewY(8deg) translate(10px); */
  }

  &:focus {
    box-shadow: 4px 4px 10px hsl(180deg, 5%, 50%);
  }
  
`;

const Image = styled.img`
  /* Set to block to cover all parent container space*/  
  display: block;
  /* Set width to be the same as parent content's */
  width: 100%;
  line-height: 0;
`;

const Name = styled.h2``;

const Author = styled.h3``;

export default Book;