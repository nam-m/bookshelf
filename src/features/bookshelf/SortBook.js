import React from 'react';
import styled from 'styled-components/macro';

const SortBook = ({ label, value, children, ...props }) => {
  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <NativeSelect {...props}>{children}</NativeSelect>
        <DisplayedSelect>
          {children.find((child) => child.props.value === value)}
        </DisplayedSelect>
      </SelectWrapper>
    </Wrapper>
  );
};

/* Wrapper needs to be a label to have <option> as child element */
const Wrapper = styled.label`
  display: flex;
  align-items: baseline;
`;

const VisibleLabel = styled.span`
  margin-right: 16px;
  color: hsl(220deg, 5%, 40%);
`;

const SelectWrapper = styled.span`
  position: relative;
`;

/* Hide native select */
const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* Use pointer for select options */
  cursor: pointer;
`;

/* Use span with display: block instead of div 
   as div cannot be a child of label */
const DisplayedSelect = styled.span`
  display: block;
  background-color: hsl(185deg, 5%, 90%);
  font-size: 1rem;
  color: hsl(220deg, 3%, 20%);
  padding: 12px 42px 12px 16px;
  border-radius: 8px;
  /* Use pointer from NativeSelect instead */
  pointer-events: none;

  /* Add focus effect to Native Select */
  ${NativeSelect}:focus ~ & {
    outline: 1px dotted hsl(140deg, 0%, 12%);
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default SortBook;
