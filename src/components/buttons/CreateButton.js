import styled from 'styled-components/macro';
import { WEIGHTS } from '../../utils/constants';

const CreateButton = styled.button`
  --toggle-width: 8rem;
  --toggle-height: 3rem;
  --toggle-padding: 4px;

  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);
  border-radius: calc(var(--toggle-width) / 2);
  padding: var(--toggle-padding);
  border: none;
  background-color: hsl(16deg, 100%, 50%);
  font-weight: ${WEIGHTS.bold};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: hsl(16deg, 100%, 55%);
  }

  &:active {
    box-shadow: 0 0 0 3px hsl(185deg, 10%, 95%);
  }
`;

export default CreateButton;
