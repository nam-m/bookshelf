import React from 'react';
import styled from 'styled-components/macro';

import FormErrorMessage from '../../utils/FormErrorMessage';

const BookFormField = ({
  name,
  type,
  form,
  setForm,
  handleUpdateForm,
  placeholder,
  submitted,
}) => {
  // Label name for each row
  const key = Object.keys(form).find((key) => key === name);
  const labelName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Row>
      <Label htmlFor={name}>{labelName}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={form[key].value}
        placeholder={placeholder}
        $showError={!!form[key].message}
        onClick={() => {
          setForm({
            ...form,
            [key]: {
              ...form[key],
              dirty: true,
            },
          });
        }}
        onChange={(e) => handleUpdateForm(e)}
      ></Input>
      <FormErrorMessage
        submitted={submitted}
        message={form[key].message}
        inputDirty={form[key].dirty}
        inputError={form[key].error}
        inputValue={form[key].value}
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

  ${(p) =>
    p.$showError
      ? `
    outline: 1px solid red;
  `
      : ``};
`;

export default BookFormField;
