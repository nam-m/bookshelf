import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components/macro';

import SortBook from './SortBook';
import ViewBook from './ViewBook';
import Book from './book/Book';
import BookPreview from './book/BookPreview';

const _ = require('lodash');

const Bookshelf = ({
  sortId,
  setSortId,
  selectedShelf,
  books,
  setBooks,
  viewBooks,
  setViewBooks,
  showPreview,
  setShowPreview,
  bookToPreview,
  setBookToPreview,
  previewRef,
  areAllBooksSelected,
  shelves,
  setShelves,
}) => {
  const compareName = (name) => {
    return name.toLowerCase().split(' ').toReversed().join(' ');
  };

  const sortBooksById = (sortValue) => {
    let sortedBooks;
    if (sortValue === 'author') {
      sortedBooks = [...books].sort((currentBook, nextBook) => {
        if (
          compareName(currentBook[sortValue]) > compareName(nextBook[sortValue])
        )
          return 1;
        if (
          compareName(currentBook[sortValue]) < compareName(nextBook[sortValue])
        )
          return -1;
        return 0;
      });
      setBooks(sortedBooks);
    } else if (sortValue === 'title') {
      sortedBooks = [...books].sort((currentBook, nextBook) => {
        if (currentBook[sortValue] > nextBook[sortValue]) return 1;
        if (currentBook[sortValue] < nextBook[sortValue]) return -1;
        return 0;
      });
      setBooks(sortedBooks);
    }
  };

  return (
    <>
      <Wrapper>
        {/* Tray on top of book grid to provide status & viewing options */}
        <ViewTray>
          <BookStatus>
            {books.length} {books.length > 1 ? 'books' : 'book'}
          </BookStatus>
          <ViewOptions>
            <SortBook
              label="Sort"
              value={sortId}
              onChange={(e) => {
                setSortId(e.target.value);
                sortBooksById(e.target.value);
              }}
            >
              <option value="time">Recent</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="manual">Manually</option>
            </SortBook>
            <ViewBook viewBooks={viewBooks} setViewBooks={setViewBooks} />
          </ViewOptions>
        </ViewTray>
        {/* Pass state `viewBooks` to change book view based on <ViewBook /> */}
        <BookGrid $viewBooks={viewBooks}>
          {/* Map fields of each instance `book` in books to <BookWrapper />
            , which contains <Book /> */}
          {books
            .filter((book) => {
              if (areAllBooksSelected) {
                return true;
              } else if (Object.keys(selectedShelf).length > 0) {
                if (selectedShelf['books'].length > 0) {
                  return _.find(selectedShelf['books'], book);
                } else {
                  return false;
                }
              }
            })
            .map((book) => (
              <Book
                book={{ ...book }}
                key={`${book.title}-${nanoid()}`}
                viewBooks={viewBooks}
                showPreview={showPreview}
                setShowPreview={setShowPreview}
                setBookToPreview={setBookToPreview}
                previewRef={previewRef}
                shelves={shelves}
                setShelves={setShelves}
              />
            ))}
        </BookGrid>
      </Wrapper>
      {showPreview && (
        <BookPreview
          bookToPreview={bookToPreview}
          showPreview={showPreview}
          ref={previewRef}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ViewTray = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ViewOptions = styled.div`
  display: flex;
  gap: 16px;
`;

const BookStatus = styled.h2`
  font-size: 1.25rem;
`;

const BookGrid = styled.div`
  display: grid;
  margin-top: 16px;
  margin-bottom: 16px;

  ${(p) =>
    p.$viewBooks
      ? `
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    `
      : `
    grid-template-columns: repeat(auto-fill, 
    minmax(
      min(100%/3, max(200px, 100%/7)), 1fr));
    gap: 16px;
  `};
`;

export default Bookshelf;
