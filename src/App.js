import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro'

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import BookPreview from './features/bookshelf/book/BookPreview';
import useClickOutside from './utils/ClickOutside';
import popoverBackground from './utils/PopoverBackground';
import PopoverWrapper from './components/common/PopoverWrapper';

const App = () => {
  const [bookPreview, setBookPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const ref = useRef();
  /* Prevent setShowPreview re-rendering by using arrow function */
  useClickOutside(ref, () => setShowPreview(false));
  popoverBackground(showPreview);

  return (
    <>
      <Header />
      <Main
        showPreview={showPreview} 
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

const PreviewWrapper = styled(PopoverWrapper)`
  ${p => p.$showPreview
  ? 
  `visibility: visible;
  ` 
  : 
  `visibility: hidden`
  };
`;

export default App;
