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
`;

const CreateCategory = styled(CreateButton)``;

const AllBooks = styled.div``;

const Category = styled.div``;

export default SideBar;