import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  border: none;
}
  body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    color: ${props => props.primary ? 'black' : 'unset'};
    text-decoration: none;
  }


`;

export default GlobalStyle;