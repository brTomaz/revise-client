import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Revise | Consolide o seu conhecimento</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="
          Aplicativo para revisão de conceitos e questões de vestibulares em universidades brasileiras, especialmente o Exame Nacional do Ensino Médio."
        />
        <meta
          name="keywords"
          content="Revise, Estudos, ENEM, Vestibular, Ensino Médio, Preparação, App de Questões"
        />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
