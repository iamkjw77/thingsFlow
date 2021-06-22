import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
  font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }

  ul, ol, li {
    list-style: none;
  }
`;

export default GlobalStyle;
