import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  open: boolean;
}

const openModalAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: ${openModalAnimation};
  animation-duration: 300ms;

  main {
    background-color: ${(props) => props.theme.dialog.primary};
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border: 0;
    border-radius: 2px; 
  }
`;
