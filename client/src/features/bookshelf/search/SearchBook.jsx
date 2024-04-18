import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Icon from '../../../components/common/Icon';
import bookService from '../../../services/BookServices';
import useClickOutside from '../../../utils/UseClickOutside';
import SearchDropdown from './SearchDropdown';

const SearchBook = ({ searchDropdownRef, showSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await bookService.searchBook(searchInput);
      const bookResults = results.items.map((book) => book.volumeInfo);

      const bookData = bookResults.map((book) => ({
        bookId: book.id,
        authors: book.authors || ['No author to display'],
        title: book.title,
        description: book.description,
        image: book.imageLinks?.thumbnail || '',
        link: book.infoLink,
      }));

      setSearchedBooks(bookData);
      // console.log(searchedBooks.length);
    } catch (error) {
      console.log('Error submitting search: ', error);
    }
  };

  return (
    <Wrapper>
      <SearchLabel htmlFor="search">
        <SearchInput
          type="text"
          id="search"
          placeholder="Search book online..."
          onChange={(e) => {
            setSearchInput(e.target.value);
            setTimeout(() => {
              handleSearch();
            }, 1000);
          }}
        />
        <SearchIcon id="search" size={16} strokeWidth={2} />
      </SearchLabel>
      {searchInput !== '' && (
        <SearchDropdown
          results={searchedBooks}
          ref={searchDropdownRef}
          showSearchResults={showSearchResults}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// Not use form to not display all search results elsewhere
// const SearchForm = styled.form``;

const SearchLabel = styled.label`
  //Set position to relative to contain absolute-positioned search icon
  position: relative;
`;

const SearchInput = styled.input`
  line-height: 1.5rem;
  width: 100%;
  padding: 8px;
  padding-left: 32px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
  outline-offset: 4px;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  margin-left: 8px;
`;

export default SearchBook;
