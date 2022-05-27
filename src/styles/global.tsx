import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }

  body, html {
    display: block;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    overflow-x: hidden;
    color: #fff;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
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

  .spinner {
    -webkit-animation: spinner 2s infinite linear;
            animation: spinner 2s infinite linear;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }

  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }
`;

export default GlobalStyle;
