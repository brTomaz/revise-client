import sanitize from 'sanitize-html'

import Logo from 'components/Logo'
import Question from 'components/Question'
import HeaderCounter from 'components/HeaderCounter'
import { TypeQuestion } from 'domain/entities/question'
import { HandleAnswerClickType } from 'domain/functions/handle-answer-click-type'
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
    <section>
      <Styles.Wrapper>
        <Styles.Header>
          <HeaderCounter
            mainInfo={numberOfCurrentQuestion}
            topText="Questão"
            bottomText={`de ${numberOfQuestions}`}
          />
          <Logo hideOnMobile />
          <HeaderCounter
            mainInfo={currentPoints}
            topText="Pontuação"
            bottomText="pontos"
          />
        </Styles.Header>
        <Question
          key={currentQuestion.id}
          info={sanitize(currentQuestion.info, {
            allowedTags: ['figure', 'img', 'p', 'b']
          })}
          statement={currentQuestion.statement}
          answers={currentQuestion.answers}
          correctAnswer={currentQuestion.correctAnswer}
          handleClick={handleClick}
        />
      </Styles.Wrapper>
    </section>
  )
}

export default Main
