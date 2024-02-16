import styled from 'styled-components';

const IconButton = styled.button`
  cursor: pointer;
  border: none;
  aspect-ratio: 1;
  border-radius: 8px;

  &:hover {
    background-color: hsl(185deg, 2%, 90%);
  }
`;

export default IconButton;
