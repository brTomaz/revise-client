import AnimatedWrapper from 'components/AnimatedWrapper'
import Bar from 'components/Bar'
import Chart from 'components/Chart'
import Logo from 'components/Logo'
import {
  beforeChildrenTopAnimation,
  leftToRightAnimation,
  topAnimation
} from 'styles/animations'
import * as Styles from './styles'

type ResultsProps = {
  punctuation: number
  mapTries: number[]
  restart: () => void
}

const Results = ({ punctuation, mapTries, restart }: ResultsProps) => {
  return (
    <>
      <AnimatedWrapper animation={beforeChildrenTopAnimation} hidden visible>
        <Styles.Header>
          <AnimatedWrapper animation={topAnimation}>
            <Logo />
          </AnimatedWrapper>
        </Styles.Header>
      </AnimatedWrapper>

      <AnimatedWrapper animation={leftToRightAnimation} hidden visible>
        <Bar />
      </AnimatedWrapper>

      <AnimatedWrapper animation={beforeChildrenTopAnimation} hidden visible>
        <Styles.Wrapper>
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
      </AnimatedWrapper>
    </>
  )
}

export default Results
