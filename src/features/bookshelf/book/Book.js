import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Dropdown from '../../../components/Dropdown';
import BookInfo from './BookInfo';
import BookPopover from './BookPopover';

const Book = ({
  book,
  viewBooks,
  showPreview,
  setShowPreview,
  setBookToPreview,
  books,
  setBooks,
  previewRef,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  // Control dropdown menu state
  const [isOpen, setIsOpen] = useState(false);

  const removeBook = (bookToRemove) => {
    const newBooks = books.filter(
      (book) =>
        book.title !== bookToRemove.title && book.author !== bookToRemove.author
    );
    setBooks(newBooks);
  };

  const addBookToShelf = () => {};

  return (
    <Wrapper
      $viewBooks={viewBooks}
      onMouseOver={() => setShowPopover(true)}
      onMouseOut={() => setShowPopover(false)}
    >
      <BookCover>
        <Link>
          <ImageWrapper>
            <Image alt="" src={book.imageSrc} />
          </ImageWrapper>
        </Link>
        {!viewBooks && showPopover && (
          <BookPopoverWrapper>
            <Dropdown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              book={book}
              removeBook={removeBook}
            />
            <BookPopover
              showPreview={showPreview}
              setShowPreview={setShowPreview}
              setBookToPreview={setBookToPreview}
              book={book}
              previewRef={previewRef}
            />
          </BookPopoverWrapper>
        )}
      </BookCover>
      <BookInfo viewBooks={viewBooks} book={book} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;

  ${(p) =>
    p.$viewBooks
      ? ` 
    grid-auto-flow: column;
    grid-template-columns: 200px minmax(300px, 1fr);
    gap: 16px;
    
    &:not(:last-child) {
      border-bottom: 1px solid hsl(180deg, 5%, 50%);
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  `
      : `
    grid-auto-flow: row;
    grid-template-rows: min-content min-content;
    gap: 4px 0;
  `};
`;

const BookCover = styled.div`
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  /* position: relative; */
  border-radius: 8px;
  /* Hide image that extends beyond this wrapper
     to apply border-radius effect */
  overflow: hidden;

  &:hover {
    box-shadow: 4px 4px 10px hsl(180deg, 5%, 50%);
  }
  &:focus {
    box-shadow: 4px 4px 10px hsl(180deg, 5%, 50%);
  }
`;

const Image = styled.img`
  /* Set to block to cover all parent container space*/
  display: block;
  /* Set width to be the same as parent content's */
  max-width: 100%;
  max-height: 100%;
  line-height: 0;
`;

const BookPopoverWrapper = styled.div``;

export default Book;
