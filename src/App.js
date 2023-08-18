import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro'

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import BookPreview from './features/bookshelf/book/BookPreview';
import useClickOutside from './utils/ClickOutside';

const App = () => {
  const [bookPreview, setBookPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const ref = useRef();
  /* Prevent setShowPreview re-rendering by using arrow function */
  useClickOutside(ref, () => setShowPreview(false));

  return (
    <>
      <Header />
      <Main 
        setShowPreview={setShowPreview}
        setBookPreview={setBookPreview}
        />
      <Footer />
      <PreviewWrapper $showPreview={showPreview}>
        <BookPreview 
          bookPreview={bookPreview}
          showPreview={showPreview}
          ref={ref}
        />
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  /* Make background more opague when popover is on */
  background: hsl(0deg 0% 0% / 0.35);
  
  ${p => p.$showPreview
  ? 
  `visibility: visible;` 
  : 
  `visibility: hidden`
  };
`;

export default App;
