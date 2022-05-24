import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    display: block;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #020202;
    overflow-x: hidden;
    color: #fff;
  }

  img {
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    border: 0;
  }
`

export default GlobalStyle;
