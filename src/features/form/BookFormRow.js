import React from "react";
import styled from 'styled-components/macro';

import FormErrorMessage from '../../utils/FormErrorMessage';

const BookFormRow = ({name, formInput, form, setForm, onUpdateForm, submitted}) => {
  // Label name for each row
  const labelName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Row>
      <Label htmlFor={name}>{labelName}</Label>
      <Input 
        type='text' 
        id={name} 
        name={name}
        value={formInput.value}
        $showError={!!formInput.message}
        onClick={() => {
          setForm({
            ...form, 
            book: {
              ...formInput,
              dirty: true
            }
          });
        }}
        onChange={e => {
          onUpdateForm(e);
        }}
        >
      </Input>
      <FormErrorMessage 
        message={formInput.message}
        submitted={submitted}
        inputDirty={formInput.dirty}
        inputError={formInput.error}
        inputValue={formInput.value}
      />
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);

  ${p => p.$showError ?
  `
    outline: 1px solid red;
  `
  :
  ``
  };
`;

export default BookFormRow;