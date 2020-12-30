import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Statement from '.'

describe('<Statement />', () => {
  let statement: HTMLElement

  beforeEach(() => {
    renderWithTheme(<Statement>Lorem ipsum</Statement>)
    statement = screen.getByText(/lorem ipsum/i)
  })

  it('should render the Statement with styles', () => {
    expect(statement).toHaveStyle({
      color: theme.colors.black,
      'font-size': theme.font.sizes.large,
      'font-weight': theme.font.normal,
      padding: theme.spacings.xsmall
    })
  })

  it('should resize font-size on large screens', () => {
    expect(statement).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: '(min-width: 768px)'
    })
  })
})
