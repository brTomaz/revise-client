import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Answer from '.'

describe('<Answer />', () => {
  let listItem: HTMLElement
  beforeEach(() => {
    renderWithTheme(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Answer handleAnswerClick={() => {}} answer={'any_answer'} />
    )

    listItem = screen.getByRole('listitem')
  })

  it('should render the Answer with styles', () => {
    expect(listItem).toHaveStyle({
      'font-size': theme.font.sizes.large,
      color: theme.colors.white,
      padding: `${theme.spacings.xsmall} ${theme.spacings.xsmall}`,
      'border-radius': '4px',
      'list-style': 'none'
    })

    expect(listItem).toMatchSnapshot()
  })

  it('should change color when hovering', () => {
    expect(listItem).toHaveStyleRule('color', theme.colors.secondary, {
      modifier: ':hover'
    })
  })
})
