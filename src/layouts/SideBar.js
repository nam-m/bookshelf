import React from 'react';
import styled from 'styled-components/macro';
import CreateButton from '../components/common/CreateButton';

const SideBar = () => {
  return (
    <Wrapper>
      <CreateCategory>
        Create new category
      </CreateCategory>
      <AllBooks>
        All books
      </AllBooks>
      <Category>
        Category 1
      </Category>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
`;

const Item = styled.div`
  --item-width: 8em;

  width: 100%;
  padding: 16px 8px;
  border-radius: 0 calc(var(--item-width)/2) calc(var(--item-width)/2) 0;
;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: hsl(16deg, 100%, 60%);
    font-weight: 700;
    color: white;
  }

  &:focus {
    background-color: hsl(16deg, 100%, 50%);
    font-weight: 700;
    color: white;
  }
`;

const CreateCategory = styled(Item)``;

const AllBooks = styled(Item)``;

const Category = styled(Item)``;

export default SideBar;