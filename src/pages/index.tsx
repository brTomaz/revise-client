import { MouseEvent, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import Main from 'templates/Main'
import Results from 'templates/Results'
import { TypeQuestion } from 'domain/entities/question'
import Toast, { showToast } from 'components/Toast'
import { getQuestionsFromAPI } from '../services/api/usecases/get-questions'
import getPoints from 'utils/score/get-points'
import { shuffleQuestions } from 'utils/questions/shuffle-array'

type HomeProps = {
  questions: TypeQuestion[]
}

const initialCurrentQuestionState = 0
const initialPointsState = 0
const initialMapTriesState = [0, 0, 0, 0, 0]

export default function Home({ questions }: HomeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(
    initialCurrentQuestionState
  )
  const [points, setPoints] = useState(initialPointsState)
  const [mapTries, setMapTries] = useState(initialMapTriesState)

  useEffect(() => {
    // console.log(currentQuestion)
  }, [currentQuestion])

  let tries = 0

  const numberOfQuestions = questions.length

  function handleClick(
    index: number,
    correctAnswer: number,
    event: MouseEvent
  ) {
    tries++
    const element = event.target as HTMLLIElement

    element.style.pointerEvents = 'none'

    const isCorrectAnswer = index === correctAnswer - 1

    if (isCorrectAnswer) {
      element.classList.add('correct')

      mapTries[tries - 1] += 1
      setMapTries(mapTries)

      const pointsEarned = getPoints(tries)

      setPoints(points + pointsEarned)

      showToast({ points: pointsEarned, attempt: tries })

      tries = 0

      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 4000)
      return
    }
    element.classList.add('wrong')
  }

  function restart() {
    shuffleQuestions(questions)
    setCurrentQuestion(initialCurrentQuestionState)
    setPoints(initialPointsState)
    setMapTries(initialMapTriesState)
  }

  return (
    <>
      {currentQuestion !== questions.length ? (
        <>
          <Main
            currentPoints={points}
            numberOfCurrentQuestion={currentQuestion + 1}
            numberOfQuestions={numberOfQuestions}
            currentQuestion={questions[currentQuestion]}
            handleClick={handleClick}
          />
        </>
      ) : (
        <Results punctuation={points} mapTries={mapTries} restart={restart} />
      )}
      <Toast />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const questions = await getQuestionsFromAPI()
  shuffleQuestions(questions)

  return {
    props: {
      questions
    }
  }
}
