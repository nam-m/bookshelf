import React, { forwardRef } from "react";
import styled from "styled-components/macro";

const BookPreview = forwardRef(function BookPreview(showPreview, ref) {
  return (showPreview) ? (
    <Wrapper ref={ref}>
      <PreviewContent>
        <MainInfo>
          <ImageWrapper>
            <Image alt='' src=''/>
          </ImageWrapper>
        </MainInfo>
        <Description>

        </Description>
        <Footnote>

        </Footnote>
      </PreviewContent>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
`;

const PreviewContent = styled.article`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const MainInfo = styled.header``;

const ImageWrapper = styled.div`
  /* position: relative; */
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

const Description = styled.article``;

const Footnote = styled.footer``;

export default BookPreview;