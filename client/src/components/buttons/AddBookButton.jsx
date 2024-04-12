import React from 'react';
import styled from 'styled-components/macro';

import BookForm from '../../features/form/BookForm';
import { QUERIES } from '../../utils/constants';
import Icon from '../common/Icon';
import CreateButton from './CreateButton';

const AddBookButton = ({ books, setBooks, addBook, setAddBook, addRef }) => {
  return (
    <>
      <Wrapper>
        <Button
          onClick={() => {
            setAddBook(true);
          }}
        >
          <AddBookText>Upload book</AddBookText>
          <AddBookIcon id="add" size={16} strokeWidth={4} />
        </Button>
      </Wrapper>
      {addBook && (
        <BookForm
          books={books}
          setBooks={setBooks}
          addBook={addBook}
          setAddBook={setAddBook}
          ref={addRef}
        />
      )}
    </>
  );
};

const Wrapper = styled.div``;

const Button = styled(CreateButton)`
  /* @container ${QUERIES.tabletAndDown} {
    border: 1px solid;
  } */

  @media ${QUERIES.mobileAndDown} {
    display: flex;
    justify-content: center;
    align-items: center;

    --toggle-width: 3.5rem;
    --toggle-height: 2.5rem;
    /* --toggle-padding: 4px; */
  }
`;

const AddBookText = styled.span`
  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;

const AddBookIcon = styled(Icon)`
  display: none;

  @media ${QUERIES.mobileAndDown} {
    display: revert;
  }
`;

export default AddBookButton;
