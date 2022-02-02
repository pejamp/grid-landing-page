import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --text-title: #142740;
    --text-body: #8290A5;
    --button-default: #E7EFF2;
    --highlight-color: #F06717;

    --white: #FFFFFF;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    background: var(--background);
  }
  body, input, textarea, button {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
    background: transparent;
  }
`