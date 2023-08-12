import React, { forwardRef } from "react";
import styled from "styled-components/macro";

const BookPreview = forwardRef(function BookPreview({bookPreview, showPreview}, ref) {
  return (showPreview) ? (
    <Wrapper ref={ref}>
      <PreviewContent>
        <ImageWrapper>
          <Image alt='' src={bookPreview.book.imageSrc}/>
        </ImageWrapper>
        <MainInfo>
          Title: {bookPreview.book.title} <br/>
          Author: {bookPreview.book.author}
        </MainInfo>
        <Description>
          This is the book&apos;s description
        </Description>
        <Footnote>
          <Genre>Thriller</Genre>
          <Length>{bookPreview.book.pages} pages</Length>
          <ReleasedDate></ReleasedDate>
          <Publisher></Publisher>
        </Footnote>
      </PreviewContent>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 4px;
`;

const PreviewContent = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  grid-auto-flow: row;
  grid-template-areas: 
    'image main-info'
    'description description'
    'footnote footnote';
  grid-template-rows: 250px min-content min-content;
`;

const MainInfo = styled.header`
  grid-area: main-info;

`;

const ImageWrapper = styled.div`
  grid-area: image;
  border-radius: 8px;
  /* Hide image that extends beyong this wrapper
     to apply border-radius effect */
  overflow: hidden;
`;

const Image = styled.img`
  /* Set to block to cover all parent container space*/  
  display: block;
  /* Set width to be the same as parent content's */
  max-width: 100%;
  max-height: 100%;
  line-height: 0;
`;

const Description = styled.p`
  grid-area: description;
`;

const Footnote = styled.footer`
  grid-area: footnote;
`;

const Genre = styled.h3``;
const Length = styled.h3``;
const ReleasedDate = styled.h3``;
const Publisher = styled.h3``;

export default BookPreview;