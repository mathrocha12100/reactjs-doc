import styled from 'styled-components';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  div {
    display: flex;
  }

  button.accordionButton {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${(props) => props.theme.dialog.primary};
    color: ${(props) => props.theme.dialog.text};
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-bottom: 0.5px solid ${(props) => props.theme.dialog.text};
    border-radius: ${(props) => (props.open ? '0' : '2px')};

    div.left {
      display: flex;
      align-items: center;
      justify-content: center;

      strong {
        margin-left: 10px;
        font-size: 20px;
      }

      span {
        margin-left: 10px;
      }
    }
  }

  main {
    border-radius: 2px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    padding: 10px;
    display: ${(props) => (props.open ? 'block' : 'none')};
    background-color: ${(props) => props.theme.dialog.primary};
    overflow: hidden;

    max-height: 100%;
  }
`;
