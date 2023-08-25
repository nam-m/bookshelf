import React, { forwardRef } from "react";
import styled from 'styled-components/macro';
import CreateButton from "../../components/common/CreateButton";

const BookForm = forwardRef(function BookForm({addBook}, ref) {
  return (addBook) ? (
    <Wrapper ref={ref}>
      <Form action="https://httpbin.org/post" method="post">
        <Row>
          <BookLabel htmlFor="book">Book</BookLabel>
          <BookInput type="text" id="book" name="book"></BookInput>
        </Row>
        <Row>
          <AuthorLabel htmlFor="author">Author</AuthorLabel>
          <AuthorInput type="text" id="author" name="author"></AuthorInput>
        </Row>
        <Row>
          <SubmitButton>Add book</SubmitButton>
        </Row>
      </Form>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 4px;
  background-color: white;
  padding: 64px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BookLabel = styled.label``;

const Input = styled.input`
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
`;

const BookInput = styled(Input)``;

const AuthorLabel = styled.label``;

const AuthorInput = styled(Input)``;

const SubmitButton = styled(CreateButton)`
  align-self: flex-end;
`;

export default BookForm;