import React from 'react';
import styled from 'styled-components/macro';

import Book from './book/Book';
import BookSort from './SortBook';
import BookView from './ViewBook';
import AddBook from './AddBook';

const Bookshelf = ({
  sortId, setSortId, 
  sortBooks, setSortBooks,
  viewBooks, setViewBooks,
  setShowPreview,
  setBookPreview,
  setAddBook}) => {
  // const sortAuthors = (authorNames) => {
  //   return authorNames
  //     .map(authorName => 
  //       authorName.split(" ").toReversed().join(" "))
  //     .sort();
  // }

  const sortBooksById = (sortValue) => {
    if (sortValue !== 'manual' && sortValue !== 'time') {
      const sortedBooks = [...sortBooks].sort((currentBook, nextBook) => {
        if (currentBook[sortValue] > nextBook[sortValue]) {
          return 1;
        }
        else if (currentBook[sortValue] < nextBook[sortValue]) {
          return -1;
        }
        return 0;
      });
      console.log('Sort ID: ', sortValue);
      console.log(sortedBooks);
      setSortBooks(sortedBooks);
    }
  }

  return (
    <Wrapper>
      {/* Tray on top of book grid to provide status & viewing options */}
      <ViewTray>
        <BookStatus>{sortBooks.length} books</BookStatus>
        <ViewOptions>
          <AddBook setAddBook={setAddBook}/>
          <BookSort
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
          </BookSort>
          <BookView 
            viewBooks={viewBooks} 
            setViewBooks={setViewBooks}
          />
        </ViewOptions>
      </ViewTray>
      {/* Pass state `viewBooks` to change book view based on <BookView /> */}
      <BookGrid $viewBooks={viewBooks}>
        {/* Map fields of each instance `book` in sortBooks to <BookWrapper />
          , which contains <Book /> */}
        {sortBooks.map(book =>
          <Book
            book = {{...book}}
            key={book.title}
            viewBooks={viewBooks}
            setShowPreview={setShowPreview}
            setBookPreview={setBookPreview}
          />
        )}
      </BookGrid>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ViewTray = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid hsl(120deg 5% 5%);
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
  ${p => p.$viewBooks ? 
  `
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  ` 
  : 
  `
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px;
  `
  };
`;

export default Bookshelf;
