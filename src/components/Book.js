import React, { useState } from 'react'
import styled from 'styled-components/macro'
import BookPopover from './input/BookPopover';

const Book = ({author, imageSrc, viewBooks}) => {
  const[popover, setPopover] = useState({display: 'none'});

  return (
    <Wrapper 
      viewBooks={viewBooks}
      onMouseOver={() => setPopover({display: 'block'})}
      onMouseOut={() => setPopover({display: 'none'})}
    >
      <Link>
      <ImageWrapper>
          <Image alt='' src={imageSrc} />
        </ImageWrapper>
        <Author>{author}</Author>
      </Link>
        <BookPopover popover={popover}/>
    </Wrapper>
    
  );
};

const Link = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;

const Wrapper = styled.div`
  max-width: 100%;
  ${p => p.viewBooks ?
  `
    &:not(:last-child) {
      border-bottom: 1px solid hsl(180deg, 5%, 50%);
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  `
  :``
  };
`;

const ImageWrapper = styled.div`
  /* position: relative; */
  border-radius: 8px;
  /* Hide image that extends beyong this wrapper
     to apply border-radius effect */
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
  max-width: 100%;
  line-height: 0;
`;

const Author = styled.h3``;

export default Book;