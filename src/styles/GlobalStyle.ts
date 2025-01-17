import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.body.background};
    color: ${(props) => props.theme.body.text}
    }

  *, button, input {
    font-family: Roboto, sans-serif;
  }
`;
