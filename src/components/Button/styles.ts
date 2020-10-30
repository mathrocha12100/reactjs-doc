import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import { FaCircleNotch } from 'react-icons/fa';

interface ButtonContainerProps {
  customStyles: {
    backgroundColor: string;
    textColor: string;
  };
}

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(FaCircleNotch)`
  animation: ${loadingAnimation} 1s infinite linear;
`;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  outline: 0;
  border: 0;
  padding: 10px;
  border-radius: 3px;
  color: ${(props) => props.customStyles.textColor};
  background: ${(props) => props.customStyles.backgroundColor};

  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;

  transition: background 1s;

  &:hover {
    background: ${(props) => darken(0.1, props.customStyles.backgroundColor)};
  }
  &:disabled {
    opacity: 0.5;
    cursor: initial;

    &:hover {
    background: ${(props) => props.customStyles.backgroundColor};
  }
  }
`;
