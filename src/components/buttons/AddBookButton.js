import React from 'react';
import styled from 'styled-components/macro';

import CreateButton from "./CreateButton";
import Icon from "../common/Icon";
import { QUERIES } from '../../utils/constants';

const AddBookButton = ({setAddBook}) => {
  return (
    <Wrapper>
      <Button
        onClick={() => setAddBook(true)}
      >
        <AddBookText>Add book</AddBookText>
        <AddBookIcon id='add' size={16} strokeWidth={4} />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 100%; */
`;

const Button = styled(CreateButton)`
  @media ${QUERIES.mobileAndDown} {
    display: flex;
    justify-content: center;
    align-items: center;
  
    --toggle-width: 3.5rem;
    --toggle-height: 2.5rem;
    /* --toggle-padding: 4px; */
  }
`;

const AddBookText = styled.span`
  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;

const AddBookIcon = styled(Icon)`
  display: none;

  @media ${QUERIES.mobileAndDown} {
    display: revert;
  }
`;

export default AddBookButton;