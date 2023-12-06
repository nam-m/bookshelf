import React from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';

import Book from './book/Book';
import SortBook from './SortBook';
import ViewBook from './ViewBook';
import AddBookButton from '../../components/buttons/AddBookButton';
import BookPreview from './book/BookPreview';

const Bookshelf = ({
  sortId, setSortId,
  selectedShelf, 
  books, setBooks,
  viewBooks, setViewBooks,
  showPreview, setShowPreview,
  bookPreview, setBookPreview,
  previewRef}) => {
  const compareName = (name) => {
    return name.toLowerCase().split(" ").toReversed().join(" ");
  }
 
  const sortBooksById = (sortValue) => {
    let sortedBooks;
    if (sortValue === 'author') {
      sortedBooks = [...books].sort((currentBook, nextBook) => {
        if (compareName(currentBook[sortValue]) > compareName(nextBook[sortValue]))
          return 1;
        if (compareName(currentBook[sortValue]) < compareName(nextBook[sortValue]))
          return -1;
        return 0;
      });
      setBooks(sortedBooks);
    }
    else if (sortValue === 'title') {
      sortedBooks = [...books].sort((currentBook, nextBook) => {
        if (currentBook[sortValue] > nextBook[sortValue])
          return 1;
        if (currentBook[sortValue] < nextBook[sortValue])
          return -1;
        return 0;
      });
      setBooks(sortedBooks);
    }
  }
  
  return (
    <Wrapper>
      {/* Tray on top of book grid to provide status & viewing options */}
      <ViewTray>
        <BookStatus>
          {books.length} {(books.length > 1) ? 'books' : 'book'}
        </BookStatus>
        <ViewOptions>
          <SortBook
            label='Sort'
            value={sortId}
            onChange={e => {
              setSortId(e.target.value);
              sortBooksById(e.target.value);
            }}
          >
            <option value='time'>Recent</option>
            <option value='title'>Title</option>
            <option value='author'>Author</option>
            <option value='manual'>Manually</option>
          </SortBook>
          <ViewBook 
            viewBooks={viewBooks} 
            setViewBooks={setViewBooks}
          />
        </ViewOptions>
      </ViewTray>
      {/* Pass state `viewBooks` to change book view based on <ViewBook /> */}
      <BookGrid $viewBooks={viewBooks}>
        {/* Map fields of each instance `book` in books to <BookWrapper />
          , which contains <Book /> */}
        {books
          .filter(book => {
            if (Object.keys(selectedShelf).length > 0) {
              if (selectedShelf['books'].length > 0)
                return selectedShelf['books'].includes(book.title);
              else
                return false;
            }
            else {
              return true;
            } 
          })
          .map(book => 
            <Book
              book={{...book}}
              key={`${book.title}-${nanoid()}`}
              viewBooks={viewBooks}
              showPreview={showPreview}
              setShowPreview={setShowPreview}
              setBookPreview={setBookPreview}
              previewRef={previewRef}
            />
          )
        }
      </BookGrid>
      {showPreview && 
        <BookPreview 
          ref={previewRef}
        />
      }
    </Wrapper>
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
  
  ${p => p.$viewBooks ? 
  `
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  ` 
  : 
  `
    grid-template-columns: repeat(auto-fill, 
      minmax(
        min(100%/3, max(200px, 100%/7)), 1fr));
    gap: 16px;
  `
  };
`;

export default Bookshelf;
