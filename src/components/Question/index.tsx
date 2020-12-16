import { MouseEvent } from 'react'

import Answer from 'components/Answer'
import Statement from 'components/Statement'
import { TypeQuestion } from 'domain/entities/question'
import { HandleAnswerClickType } from 'domain/functions/handle-answer-click-type'
import * as Styles from './styles'

export type QuestionProps = Omit<TypeQuestion, 'id'> & {
  handleClick: HandleAnswerClickType
}

const Question = ({
  info,
  statement,
  answers,
  correctAnswer,
  handleClick
}: QuestionProps) => {
  return (
    <Styles.Wrapper>
      <Styles.InfoWrapper>
        <div dangerouslySetInnerHTML={{ __html: info }} />
      </Styles.InfoWrapper>
      <Styles.StatementAnswerWrapper>
        <Statement>{statement}</Statement>
        <ul>
          {answers?.map((answer, index) => {
            return (
              <Answer
                key={answer}
                handleAnswerClick={(event: MouseEvent) =>
                  handleClick(index, correctAnswer, event)
                }
                answer={answer}
              />
            )
          })}
        </ul>
      </Styles.StatementAnswerWrapper>
    </Styles.Wrapper>
  )
}

export default Question
