import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body {
    background: #FAFAFA;
    color: #574F4D;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    width: 100%;
  }
`
export default GlobalStyle