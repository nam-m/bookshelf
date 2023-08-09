import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro'


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookPreview from './BookPreview';
import useClickOutside from './ClickOutside';

const App = () => {
  const [showPreview, setShowPreview] = useState(false);
  const ref = useRef();
  /* Prevent setShowPreview re-rendering by using arrow function */
  useClickOutside(ref, () => setShowPreview(false));

  return (
    <>
      <Header />
      <Main setShowPreview={setShowPreview}/>
      <Footer />
      <PreviewWrapper $showPreview={showPreview}>
        <BookPreview showPreview={showPreview}/>
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
  
  ${p => p.$showPreview
  ? `visibility: visible` : `visibility: hidden`};
`;

export default App;
