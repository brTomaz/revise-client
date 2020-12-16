import { MouseEvent } from 'react'
import * as Styles from './styles'

export type AnswerProps = {
  answer: string
  handleAnswerClick: (event: MouseEvent) => void
}

const Answer = ({ answer, handleAnswerClick }: AnswerProps) => (
  <Styles.Wrapper onClick={handleAnswerClick}>{answer}</Styles.Wrapper>
)

export default Answer
