import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Icon from '../../../components/common/Icon';
import bookService from '../../../services/BookServices';
import SearchDropdown from './SearchDropdown';

const SearchBook = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSubmitSearch = async (e) => {
    e.preventDefault(e);
    try {
      const { results } = await bookService.searchBook(searchInput);
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.log('error submitting search', error);
    }
  };

  const toggleShowSearchResults = () => {
    setShowSearchResults(searchInput === '' ? false : true);
  };

  return (
    <Wrapper>
      <SearchForm noValidate onSubmit={(e) => handleSubmitSearch(e)}>
        <SearchLabel htmlFor="search">
          <SearchInput
            type="text"
            id="search"
            placeholder="Search..."
            onChange={(e) => {
              setSearchInput(e.target.value);
              toggleShowSearchResults();
            }}
          />
          <SearchIcon id="search" size={16} strokeWidth={2} />
        </SearchLabel>
        {/* {showSearchResults && <SearchDropdown results={searchResults} />} */}
      </SearchForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
`;

const SearchForm = styled.form``;

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
