import React from 'react';
import styled from 'styled-components/macro';

const ConfirmationDialog = (message, confirmedAction) => {
  return (
    <Dialog>
      <ConfirmationMessage>{message}</ConfirmationMessage>
      <ConfirmationButtons>
        <ConfirmButton onClick={confirmedAction}>Confirm</ConfirmButton>
        <CancelButton autoFocus="true">Cancel</CancelButton>
      </ConfirmationButtons>
    </Dialog>
  );
};

const Dialog = styled.dialog``;

const ConfirmationMessage = styled.span``;

const ConfirmationButtons = styled.div``;

const ConfirmButton = styled.button``;

const CancelButton = styled.button``;

export default ConfirmationDialog;
