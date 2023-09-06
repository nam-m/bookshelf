import React from 'react';
import { styled } from 'styled-components';

const ErrorMessage = ({ 
  message, submitted, inputDirty, inputError, inputValue 
}) => {
  return (
    (submitted && inputDirty && inputError)
    || 
    (submitted && inputValue === '')
    )
    ? (
        <Label htmlFor='error'>
          {message}
        </Label>
    ) 
    : null;
};

const Label = styled.label`
  font-size: 0.875rem;
  color: red;
`;

export default ErrorMessage;
