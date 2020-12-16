import { MouseEvent } from 'react'

export type HandleAnswerClickType = (
  indexCurrentAnswer: number,
  correctAnswer: number,
  event: MouseEvent
) => void
