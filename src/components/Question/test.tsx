import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { mockQuestion } from './mock'
import Question from '.'

describe('<Question />', () => {
  it('should render with statement and answers', () => {
    const { container } = renderWithTheme(<Question {...mockQuestion} />)

    const statement = screen.getByText(/defende o/i)
    const firstAnswer = screen.getByText(/aponta a/i)
    const lastAnswer = screen.getByText(/demonstra acreditar/i)

    expect(statement).toBeInTheDocument()
    expect(firstAnswer).toBeInTheDocument()
    expect(lastAnswer).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
