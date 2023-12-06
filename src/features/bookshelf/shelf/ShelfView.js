import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../../../components/common/Icon';
import IconButton from '../../../components/buttons/IconButton';
import { updateObjectInArray } from '../../../utils/utils';

const ShelfView = ({shelf, shelves, setShelves}) => {
  const deleteShelf = (id) => {
    const remainingShelves = shelves.filter(shelf => id !== shelf.id);
    setShelves(remainingShelves);
  };

  return (
    <Wrapper>
      <ShelfName>
        {shelf.name}
      </ShelfName>
      <ButtonGroup>
        <EditButton
          onClick={() => 
          setShelves(updateObjectInArray(
            [...shelves], shelf.id, 'isEditing', true)
          )}
        >
          <Icon id='edit' size={24} strokeWidth={2}/>
        </EditButton>
        <CancelButton
          onClick={() => deleteShelf(shelf.id)}
        >
          <Icon id='cancel' color='red' size={24} strokeWidth={2} />
        </CancelButton>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  height: 80%;
  right: 0;
  transform: translateX(-10%);
  top: 10%;
`;

const ShelfName = styled.span``;

const EditButton = styled(IconButton)`
  /* border-radius: 50%; */
  /* background: transparent; */
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */

  &:hover {
  }
`;

const CancelButton = styled(IconButton)`
  /* border-radius: 50%; */
  /* background: transparent; */
`;

export default ShelfView;