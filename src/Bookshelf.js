import React from 'react';
import styled from 'styled-components/macro';

import BOOKS from './data'
import Book from './Book';
import SortSelect from './SortSelect';

const Bookshelf = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      {/* Tray on top of book grid to provide status & viewing options */}
      <ViewTray>
        <BookStatus>{BOOKS.length} books</BookStatus>
        <ViewOptions>
          <SortSelect
              label='Sort'
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value='time'>Recent</option>
              <option value='title'>Title</option>
              <option value='author'>Author</option>
              <option value='manual' selected>Manually</option>
            </SortSelect>
          <SwitchViewButton>
            List/Grid
          </SwitchViewButton>
        </ViewOptions>
      </ViewTray>
      <BookGrid>
        {/* Map fields of each instance `book` in BOOKS to <BookWrapper />
          , which contains <Book /> */}
        {BOOKS.map(book =>
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

const SwitchViewButton = styled.button`
  width: 80px;
`;

const BookStatus = styled.h2`
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
`;

const BookWrapper = styled.div`
  
`;

export default Bookshelf;
