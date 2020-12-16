import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${theme.font.family}
  }
`

export default GlobalStyles
