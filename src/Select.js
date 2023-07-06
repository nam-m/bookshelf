import React from 'react';
import styled from 'styled-components/macro';

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>

      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>

        <DisplayedSelect>
          {displayedValue}
        </DisplayedSelect>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: baseline;
`;

const VisibleLabel = styled.span`
  margin-right: 16px;
  color: hsl(220deg, 5%, 40%);
`;

const SelectWrapper = styled.div`
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

const DisplayedSelect = styled.span`
  display: block;
  background-color: hsl(185deg, 5%, 90%);
  font-size: 1rem;
  color: hsl(220deg, 3%, 20%);
  padding: 12px 42px 12px 16px;
  border-radius: 8%;
  pointer-events: none;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;