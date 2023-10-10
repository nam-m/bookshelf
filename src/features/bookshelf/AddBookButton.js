import React from "react";
import styled from 'styled-components/macro';
import CreateButton from "../../components/common/CreateButton";

const AddBookButton = ({setAddBook}) => {
  return (
    <Wrapper>
      <Button
        onClick={() => setAddBook(true)}
      >
        Add book
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled(CreateButton)``;

export default AddBookButton;