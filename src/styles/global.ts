import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Raleway', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
