import React from 'react';
import styled from 'styled-components/macro';

const ShelfView = ({shelfName}) => {
  return (
    <Wrapper>
      <ShelfName>
        {shelfName}
      </ShelfName>
      <ShelfAction>
        <EditShelf>
          Edit
        </EditShelf>
        <DeleteShelf>
          Delete
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

const EditShelf = styled.button``;

const DeleteShelf = styled.button``;

export default ShelfView;