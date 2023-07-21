import React from 'react';
import styled from 'styled-components/macro';

import BOOKS from '../data'
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
        <BookStatus>{BOOKS.length} books</BookStatus>
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
        {/* Map fields of each instance `book` in BOOKS to <BookWrapper />
          , which contains <Book /> */}
        {sortBooks.map(book =>
          <BookWrapper key={book.name} viewBooks={viewBooks}>
            <Book {...book} />
          </BookWrapper>
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
    grid-template-columns: 215px;
  ` 
  : 
  `
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px;
  `
  };
`;

const BookWrapper = styled.div`
  ${p => p.viewBooks ?
  `    
    &:not(:last-of-type) {
      border-bottom: 1px solid hsl(180deg, 5%, 50%);
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  `
  :
  ``}
`;

export default Bookshelf;
