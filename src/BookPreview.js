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
  position: fixed;
  top: 40%;
  width: 100%;
  height: 100%;
`;

const PreviewContent = styled.p`
  width: 80%;
  background-color: red;
`;

export default BookPreview;