import React from "react";
import styled from 'styled-components/macro';

const BookForm = () => {
  return (
    <Form action="example.com" method="post">
      <Input type="text">

      </Input>
    </Form>
  );
};

const Form = styled.form``;

const Input = styled.input``;


export default BookForm;