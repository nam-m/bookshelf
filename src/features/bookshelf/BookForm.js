import React, { forwardRef } from "react";
import styled from 'styled-components/macro';

const BookForm = forwardRef(function BookForm({addBook}, ref) {
  return addBook ? (
    <Wrapper ref={ref}>
      <Form action="example.com" method="post">
        <Input type="text">
        </Input>
      </Form>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 4px;
`;

const Form = styled.form``;

const Input = styled.input``;

export default BookForm;