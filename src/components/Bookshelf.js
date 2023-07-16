import React from 'react';
import styled from 'styled-components/macro';

import BOOKS from '../data'
import Book from './Book';
import BookSort from './select/BookSort';
import BookView from './input/BookView';

const Bookshelf = ({sortId, setSortId, sortBooks, setSortBooks}) => {
  const SortBooks = (e) => {
    const sortKey = e.target.value;
    const sortedBooks = [...sortBooks]
      .sort((currentBook, nextBook) => {
        if (sortId !== 'manual')
          if (currentBook[sortKey] > nextBook[sortKey])
            return 1;
          else if (currentBook[sortKey] < nextBook[sortKey])
            return -1;
        else
          return 0;
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
              SortBooks(e);
            }}
          >
            <option value='time'>Recent</option>
            <option value='title'>Title</option>
            <option value='author'>Author</option>
            <option value='manual'>Manually</option>
            {sortId}
          </BookSort>
          <BookView />
        </ViewOptions>
      </ViewTray>
      <BookGrid>
        {/* Map fields of each instance `book` in BOOKS to <BookWrapper />
          , which contains <Book /> */}
        {sortBooks.map(book =>
          <BookWrapper key={book.name}>
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
`;

const BookWrapper = styled.div`
  
`;

export default Bookshelf;
