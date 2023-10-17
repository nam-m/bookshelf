import React from 'react';
import styled from 'styled-components/macro';

const FormErrorMessage = ({ 
  message, submitted, inputError, inputValue 
}) => {
  return (
    (submitted && (inputError ||inputValue === ''))
    ? 
    (
      <Label htmlFor='error'>
        {message}
      </Label>
    ) 
    : null
  );
};

const Label = styled.label`
  font-size: 0.875rem;
  color: red;
`;

export default FormErrorMessage;
