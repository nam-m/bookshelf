import React from 'react';
import styled from 'styled-components/macro';

import Book from './Book';
import BookSort from './select/BookSort';
import BookView from './input/BookView';

const Bookshelf = ({
  sortId, setSortId, 
  sortBooks, setSortBooks,
  viewBooks, setViewBooks}) => {
  // const sortAuthors = (authorNames) => {
  //   return authorNames
  //     .map(authorName => 
  //       authorName.split(" ").toReversed().join(" "))
  //     .sort();
  // }

  const sortBooksById = () => {
    const sortedBooks = [...sortBooks]
      .sort((currentBook, nextBook) => {
        if (sortId !== 'manual') {
          if (currentBook[sortId] > nextBook[sortId]) {
            return 1;
          }
          else if (currentBook[sortId] < nextBook[sortId]) {
            return -1;
          }
        }      
        else {
          return 0;
        }
      });
    setSortBooks(sortedBooks);
  }

  return (
    <Wrapper>
      {/* Tray on top of book grid to provide status & viewing options */}
      <ViewTray>
        <BookStatus>{sortBooks.length} books</BookStatus>
        <ViewOptions>
          <BookSort
            label='Sort'
            value={sortId}
            onChange={e => {
              setSortId(e.target.value);
              sortBooksById();
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
      <BookGrid viewBooks={viewBooks}>
        {/* Map fields of each instance `book` in sortBooks to <BookWrapper />
          , which contains <Book /> */}
        {sortBooks.map(book =>
          <Book
            {...book}
            key={book.title}
            viewBooks={viewBooks}
          />
        )}
      </BookGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  ${p => p.viewBooks ? 
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
