import React from 'react';
import styled from 'styled-components/macro';

import AddBookButton from '../components/buttons/AddBookButton';
import IconButton from '../components/buttons/IconButton';
import Icon from '../components/common/Icon';
import SearchBook from '../features/bookshelf/SearchBook';

const Header = ({ books, setBooks, addBook, setAddBook, addRef }) => {
  return (
    <Wrapper>
      <SearchBook />
      <SideGroup>
        <AddBookButton
          books={books}
          setBooks={setBooks}
          addBook={addBook}
          setAddBook={setAddBook}
          addRef={addRef}
        />
        <ProfileButton>
          <Icon id="user" size={32} strokeWidth={2} />
        </ProfileButton>
      </SideGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  gap: clamp(0.25rem, 5%, 4rem);
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid hsl(120deg 5% 5%);
`;

const SideGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  /* container-type: inline-size; */
`;

const ProfileButton = styled(IconButton)`
  border-radius: 50%;
  background: transparent;
`;

export default Header;
