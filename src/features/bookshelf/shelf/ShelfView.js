import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../../../components/common/Icon';
import IconButton from '../../../components/common/IconButton';
import { updateObjectInArray } from '../../../utils/utils';

const ShelfView = ({shelf, shelves, setShelves}) => {
  return (
    <Wrapper>
      <ShelfName>
        {shelf.name}
      </ShelfName>
      <ShelfAction>
        <EditShelf
          onClick={() => 
          setShelves(updateObjectInArray(
            [...shelves], shelf.id, 'isEditing', true)
          )}
        >
          <Icon id='edit' strokeWidth={2}/>
        </EditShelf>
        <CancelEditShelf
          onClick={() => 
          setShelves(updateObjectInArray(
            [...shelves], shelf.id, 'isEditing', false)
          )}
        >
          <Icon id='cancel' color='red' strokeWidth={2} />
        </CancelEditShelf>
      </ShelfAction>
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShelfAction = styled.div`
  display: flex;
  justify-content: center;
`;

const ShelfName = styled.span``;

const EditShelf = styled(IconButton)`
  /* background-color: white; */
`;

const CancelEditShelf = styled(IconButton)``;

export default ShelfView;