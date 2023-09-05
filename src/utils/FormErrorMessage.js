import React from 'react';
import { styled } from 'styled-components';

const ErrorMessage = ({ message }) => {
  return (
    <Label className='error-message' htmlFor='error'>
      {message}
    </Label>
  );
};

const Label = styled.label`
  font-size: 0.875rem;
  color: red;
`;

export default ErrorMessage;
