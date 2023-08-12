import React, { forwardRef } from "react";
import styled from "styled-components/macro";

const BookPreview = forwardRef(function BookPreview({bookPreview, showPreview}, ref) {
  return (showPreview) ? (
    <Wrapper ref={ref}>
      <PreviewContent>
        <MainInfo>
          <ImageWrapper>
            <Image alt='' src={bookPreview.imageSrc}/>
          </ImageWrapper>
          <BookInfo>
            <Row>
              {bookPreview.title}
            </Row>
            <Row>
              {bookPreview.author}
            </Row>
          </BookInfo>
        </MainInfo>
        <Description>
          This is the book&apos;s description
        </Description>
        <Footnote>
          <Row>Genre</Row>
          <Row>{bookPreview.pages} pages</Row>
          <Row>Edition/Released date</Row>
          <Row>Publisher</Row>
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
  padding: 64px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainInfo = styled.header`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const ImageWrapper = styled.div`
  border-radius: 8px;
  /* Hide image that extends beyong this wrapper
     to apply border-radius effect */
  overflow: hidden;
  flex-basis: 200px;
  box-shadow: 4px 4px 10px hsl(180deg, 5%, 50%);
`;

const Image = styled.img`
  /* Set to block to cover all parent container space*/  
  display: block;
  /* Set width to be the same as parent content's */
  max-width: 100%;
  max-height: 100%;
  line-height: 0;
`;

const BookInfo = styled.div``;

const Description = styled.p`
`;

const Footnote = styled.footer`
`;

const Row = styled.div``;

export default BookPreview;