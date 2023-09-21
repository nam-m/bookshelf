import React from "react";
import styled from 'styled-components/macro';

const ShelfForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <Form
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <Label htmlFor='new_shelf'></Label>
        <Input
          type='text'
          id='id'
          name='new_shelf'
          // value=''
          placeholder='Enter shelf name'
          autoFocus
        >
        </Input>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Form = styled.form``;

const Label = styled.label``;

const Input = styled.input`
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
`;

export default ShelfForm;