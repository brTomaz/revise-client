import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { mockQuestion } from './mock'
import Question from '.'

describe('<Question />', () => {
  it('should render with statement and answers', () => {
    const { container } = renderWithTheme(<Question {...mockQuestion} />)

    const statement = screen.getByText(/no cartum/i)
    const firstAnswer = screen.getByText(/se aposente prematuramente./i)
    const lastAnswer = screen.getByText(/ouça atentamente./i)

    expect(statement).toBeInTheDocument()
    expect(firstAnswer).toBeInTheDocument()
    expect(lastAnswer).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
