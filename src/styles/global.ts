import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

import theme from './theme'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Quicksand Light'), local('Quicksand-Light'),
        url('/fonts/Quicksand-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Quicksand Light'), local('Quicksand-Light'),
        url('/fonts/Quicksand-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Quicksand Bold'), local('Quicksand-Bold'),
        url('/fonts/Quicksand-Bold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: ${theme.colors.mainBg};
  }

  body {
    font-family: ${theme.font.family}
  }
`

export default GlobalStyles
