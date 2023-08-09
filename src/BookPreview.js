import React from "react";
import styled from "styled-components/macro";

const BookPreview = ({showPreview}) => {
  return (showPreview) ? (
    <Wrapper>
      <PreviewContent>this is a popover</PreviewContent>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  position: absolute;
  inset: 50%;
  width: 100%;
`;

const PreviewContent = styled.p`
  width: 80%;
  background-color: red;
`;

export default BookPreview;