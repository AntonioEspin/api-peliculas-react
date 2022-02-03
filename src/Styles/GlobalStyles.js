import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --yellow-primary: #FED941;
    --white: #FFFFFE;
    --grey: #A7A9BE;
    --black: #000000;
    --background: #0F0E17;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
    background-color: var(--background)
  }

  #app {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
  }
`;