import React, { forwardRef } from "react";
import styled from "styled-components/macro";

const BookPreview = forwardRef(function BookPreview({showPreview}, ref) {
  return (showPreview) ? (
    <Wrapper ref={ref}>
      <PreviewContent>this is a popover</PreviewContent>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 200px;
`;

const PreviewContent = styled.p`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export default BookPreview;