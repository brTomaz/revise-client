import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import HeaderCounter from '.'
import { mockHeaderCounter } from './mock'

describe('<HeaderCounter />', () => {
  it('should render the HeaderCounter with styles', () => {
    const { container } = renderWithTheme(
      <HeaderCounter {...mockHeaderCounter} />
    )

    const topText = screen.getByText(/pontuação/i)
    const mainInfo = screen.getByText(/60/)
    const bottomText = screen.getByText(/pontos/i)

    expect(topText).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
      'font-weight': 400
    })

    expect(mainInfo).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
      'font-weight': 100
    })

    expect(mainInfo).toHaveStyleRule('font-size', theme.font.sizes.xxhuge, {
      media: '(min-width: 768px)'
    })

    expect(bottomText).toHaveStyle({
      'font-size': theme.font.sizes.medium,
      'font-weight': 300
    })

    expect(bottomText).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: '(min-width: 768px)'
    })

    expect(container).toMatchSnapshot()
  })
})
