import { TypeQuestion } from 'domain/entities/question'

export function shuffleQuestions(questions: TypeQuestion[]) {
  questions.sort(() => Math.random() - 0.5)
}
