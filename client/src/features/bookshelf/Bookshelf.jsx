import { find } from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import {
  BooksProvider,
  useBooks,
  useBooksDispatch,
} from '../../contexts/BooksContext';
import bookService from '../../services/BookServices';
import SortBook from './SortBook';
import ViewBook from './ViewBook';
import Book from './book/Book';
import BookPreview from './book/BookPreview';

const Bookshelf = ({
  selectedShelf,
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
  const booksState = useBooks();
  const booksDispatch = useBooksDispatch();
  const { books, loading, error } = booksState;

  const [sortId, setSortId] = useState('title');

  useEffect(() => {
    const fetchBooks = async () => {
      booksDispatch({ type: 'FETCH_BOOKS_REQUEST' });
      try {
        const initialBooks = await bookService.getAllBooks();
        booksDispatch({
          type: 'FETCH_BOOKS_SUCCESS',
          payload: initialBooks,
        });
      } catch (error) {
        booksDispatch({
          type: 'FETCH_BOOKS_FAILURE',
          payload: error.message,
        });
      }
    };

    fetchBooks();
  }, [booksDispatch]);

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
                const sortValue = e.target.value;
                setSortId(sortValue);
                switch (sortValue) {
                  case 'title':
                    booksDispatch({
                      type: 'SORT_BOOKS_BY_TITLE',
                      payload: books,
                    });
                    break;
                  case 'author':
                    booksDispatch({
                      type: 'SORT_BOOKS_BY_AUTHOR',
                      payload: books,
                    });
                    break;
                }
              }}
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </SortBook>
            <ViewBook viewBooks={viewBooks} setViewBooks={setViewBooks} />
          </ViewOptions>
        </ViewTray>
        {/* Pass state `viewBooks` to change book view based on <ViewBook /> */}
        <BookGrid $viewBooks={viewBooks}>
          {/* Map fields of each instance `book` in books to <BookWrapper />
            , which contains <Book /> */}
          {loading === false &&
            books
              .filter((book) => {
                if (areAllBooksSelected) {
                  return true;
                } else if (Object.keys(selectedShelf).length > 0) {
                  if (selectedShelf['books'].length > 0) {
                    return find(selectedShelf['books'], book);
                  } else {
                    return false;
                  }
                }
              })
              .map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  viewBooks={viewBooks}
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
