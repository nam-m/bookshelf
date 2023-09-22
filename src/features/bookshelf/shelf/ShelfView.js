import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../../../components/common/Icon';
import IconButton from '../../../components/common/IconButton';

const ShelfView = ({shelfName}) => {
  return (
    <Wrapper>
      <ShelfName>
        {shelfName}
      </ShelfName>
      <ShelfAction>
        <EditShelf>
          <Icon id='edit' strokeWidth={2}/>
        </EditShelf>
        <DeleteShelf>
          <Icon id='cancel' color='red' strokeWidth={2} />
        </DeleteShelf>
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

const EditShelf = styled(IconButton)``;

const DeleteShelf = styled(IconButton)``;

export default ShelfView;