import AnimatedWrapper from 'components/AnimatedWrapper'
import Bar from 'components/Bar'
import HeaderCounter from 'components/HeaderCounter'
import Logo from 'components/Logo'
import Question from 'components/Question'

import { TypeQuestion } from 'domain/entities/question'
import { HandleAnswerClickType } from 'domain/functions/handle-answer-click-type'

import {
  beforeChildrenTopAnimation,
  leftToRightAnimation,
  topAnimation
} from 'styles/animations'

import { parseStringToHTML } from 'utils/parseStringToHTML'

import * as Styles from './styles'

type MainProps = {
  currentQuestion: TypeQuestion
  handleClick: HandleAnswerClickType
  numberOfCurrentQuestion: number
  numberOfQuestions: number
  currentPoints: number
}

const Main = ({
  currentQuestion,
  handleClick,
  numberOfCurrentQuestion,
  numberOfQuestions,
  currentPoints
}: MainProps) => {
  return (
    <>
      <AnimatedWrapper animation={beforeChildrenTopAnimation} hidden visible>
        <Styles.Header>
          <AnimatedWrapper animation={topAnimation}>
            <HeaderCounter
              mainInfo={numberOfCurrentQuestion}
              topText="Questão"
              bottomText={`de ${numberOfQuestions}`}
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation={topAnimation}>
            <Logo hideOnMobile />
          </AnimatedWrapper>

          <AnimatedWrapper animation={topAnimation}>
            <HeaderCounter
              mainInfo={currentPoints}
              topText="Pontuação"
              bottomText="pontos"
            />
          </AnimatedWrapper>
        </Styles.Header>
      </AnimatedWrapper>

      <AnimatedWrapper animation={leftToRightAnimation} hidden visible>
        <Bar />
      </AnimatedWrapper>

      <Styles.Wrapper>
        <Question
          key={currentQuestion.id}
          info={parseStringToHTML(currentQuestion.info)}
          statement={currentQuestion.statement}
          answers={currentQuestion.answers}
          correctAnswer={currentQuestion.correctAnswer}
          handleClick={handleClick}
        />
      </Styles.Wrapper>
    </>
  )
}

export default Main
