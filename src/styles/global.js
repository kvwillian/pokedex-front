import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fdfdfd;
    --image-bg: #f2f2f2;
    --dark-bg: #323232;
    --orange: #ee6b30;
    --title: #919191;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
`;
