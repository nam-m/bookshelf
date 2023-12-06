import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

import PopoverWrapper from '../../../components/common/PopoverWrapper';
import { QUERIES } from '../../../utils/constants';

const BookPreview = forwardRef(function BookPreview({bookPreview, showPreview}, ref) {
  return (
    <>
      {createPortal(
        <PreviewWrapper $showPreview={showPreview}>
          <Wrapper ref={ref}>
            <PreviewContent>
              <MainInfo>
                <ImageWrapper>
                  <Image alt='' src={bookPreview.imageSrc}/>
                </ImageWrapper>
                <BookInfo>
                  <Row>
                    <strong>{bookPreview.title}</strong>
                  </Row>
                  <Row>
                    {bookPreview.author}
                  </Row>
                  <NoteWrapper>
                    <Label htmlFor="notes">Notes</Label>
                    <NoteArea id="notes" name="notes" rows="5" cols="33"></NoteArea>
                  </NoteWrapper>
                </BookInfo>
              </MainInfo>
              <Description>
                This is the book&apos;s description
              </Description>
              <Review>
                User&apos;s review
              </Review>
              <Footnote>
                <FootnoteItem>Genre</FootnoteItem>
                <FootnoteItem>{bookPreview.pages} pages</FootnoteItem>
                <FootnoteItem>Edition</FootnoteItem>
                <FootnoteItem>Released Date</FootnoteItem>
                <FootnoteItem>Publisher</FootnoteItem>
              </Footnote>
            </PreviewContent>
          </Wrapper>
        </PreviewWrapper>,
        document.body
      )}
    </> 
  )
});

const PreviewWrapper = styled(PopoverWrapper)`
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 4px;
  background-color: white;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const PreviewContent = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 64px;
  border-radius: 8px;
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
  /* Hide image that extends beyond this wrapper
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

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Label = styled.label``;

const NoteArea = styled.textarea``;

const Description = styled.p`
  margin-top: 16px;
`;

const Review = styled.p``;

const Footnote = styled.footer`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  gap: 8px;
  margin-top: 16px;
`;

const Row = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

const FootnoteItem = styled.div`
  font-size: 1.25rem;
  &:not(:last-child) {
    border-right: 2px solid hsl(180deg, 5%, 50%);
    padding-right: 8px;
  }
`;
export default BookPreview;