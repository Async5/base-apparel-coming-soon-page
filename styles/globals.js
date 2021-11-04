import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.gradients.gradient1};
    min-height: 100vh;
  }

`;

export default GlobalStyles;
