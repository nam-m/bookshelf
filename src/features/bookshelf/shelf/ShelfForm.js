import React, { useState } from 'react';
import styled from 'styled-components/macro';

import IconButton from '../../../components/buttons/IconButton';
import Icon from '../../../components/common/Icon';
import {
  getObjectValueInArray,
  updateObjectInArray,
} from '../../../utils/ArrayUtils';
import { Shelf } from '../../../dataModels/ShelfDataModel';

const ShelfForm = ({ shelf, shelves, setShelves }) => {
  const [originalShelfName] = useState(
    getObjectValueInArray(shelves, shelf.id, 'name')
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedShelves = updateObjectInArray(
      [...shelves],
      shelf.id,
      'isEditing',
      false
    );
    setShelves(updatedShelves);
  };

  const handleNameChange = (e) => {
    const updatedShelves = updateObjectInArray(
      [...shelves],
      shelf.id,
      'name',
      e.target.value
    );
    setShelves(updatedShelves);
  };

  const handleUpdateForm = (e) => {
    let errorMessage;

    if (!e.target.value) {
      errorMessage = '*' + e.target.name + ' input is required';
    }
  };

  return (
    <Wrapper>
      <Form noValidate onSubmit={(e) => handleSubmit(e)}>
        <InputWrapper>
          <Label htmlFor="new_shelf"></Label>
          <Input
            type="text"
            id="new_shelf"
            name="new_shelf"
            value={shelf.name}
            placeholder="Enter shelf name"
            autoFocus
            onChange={(e) => handleNameChange(e)}
          ></Input>
          <ButtonGroup>
            <SubmitButton type="submit">
              <Icon id="check" color="green" size={24} strokeWidth={2} />
            </SubmitButton>
            <CancelButton
              onClick={() =>
                setShelves(
                  updateObjectInArray(
                    [...shelves],
                    shelf.id,
                    'name',
                    originalShelfName
                  )
                )
              }
            >
              <Icon id="cancel" color="red" size={24} strokeWidth={2} />
            </CancelButton>
          </ButtonGroup>
        </InputWrapper>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Form = styled.form``;

const InputWrapper = styled.div`
  position: relative;
  /* max-width: 100%; */
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  line-height: 1.5rem;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: hsl(185deg, 10%, 95%);
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  height: 80%;
  right: 0;
  transform: translateX(-10%);
  top: 10%;
`;

const SubmitButton = styled(IconButton)``;

const CancelButton = styled(IconButton)``;

export default ShelfForm;
