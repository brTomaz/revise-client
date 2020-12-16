import Chart from 'components/Chart'
import Logo from 'components/Logo'
import * as Styles from './styles'

type ResultsProps = {
  punctuation: number
  mapTries: number[]
  restart: () => void
}

const Results = ({ punctuation, mapTries, restart }: ResultsProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Logo />
      </Styles.Header>
      <Styles.Content>
        <Styles.ChartWrapper>
          <Styles.Title>Estatísticas</Styles.Title>
          <Chart chartData={mapTries} />
        </Styles.ChartWrapper>

        <Styles.InfoWrapper>
          <Styles.Title>Resultados</Styles.Title>
          <section>
            <span>
              Você obteve um total de <b>{punctuation}</b> pontos.
            </span>
          </section>
          <Styles.Button onClick={() => restart()}>Reiniciar</Styles.Button>
        </Styles.InfoWrapper>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default Results
