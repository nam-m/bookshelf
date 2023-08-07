import React from "react";
import styled from "styled-components/macro";
import useClickOutside from './ClickOutside';

const BookPreview = ({preview}) => {
  const {ref, isComponentVisible} = useClickOutside(true);

  if (preview) {
    if (isComponentVisible) {
      return (
        <div ref={ref}>
          <Wrapper>
            <PreviewContent>this is a popover</PreviewContent>
          </Wrapper>
        </div>
      );
    }
  }
  return null;
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