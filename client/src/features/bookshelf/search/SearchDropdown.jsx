import React, { forwardRef } from 'react';
import styled from 'styled-components/macro';
import PopoverWrapper from '../../../components/common/PopoverWrapper';

const SearchDropdown = forwardRef(function SearchDropdown({ results }, ref) {
  return (
    <Wrapper>
      <SearchDropdownMenu ref={ref}>
        {results.map((result) => (
          <Result key={result.link}>
            <ResultLink>
              <BookCoverWrapper>
                <BookCover></BookCover>
              </BookCoverWrapper>
              <BookMetadata>
                <BookTitle>{result.title}</BookTitle>
                {/* <BookAuthor>
                          by {results.authors.map((author) => ', '.join(author))}
                        </BookAuthor> */}
              </BookMetadata>
            </ResultLink>
          </Result>
        ))}
      </SearchDropdownMenu>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  // Show live search results on top in Header component
  z-index: 1;
`;

const SearchDropdownMenu = styled.menu`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  padding-left: 32px;
  width: 100%;
  background-color: white;
  border: 1px solid;
`;

const Result = styled.li`
  flex-grow: 1;
  list-style: none;
`;

const ResultLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const BookCoverWrapper = styled.div``;

const BookCover = styled.image``;

const BookMetadata = styled.div``;

const BookTitle = styled.span``;

const BookAuthor = styled.span``;

export default SearchDropdown;
