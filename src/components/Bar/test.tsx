import { renderWithTheme } from 'utils/tests/helpers'
import Bar from '.'

describe('<Bar />', () => {
  it('should render Bar with styles', () => {
    const { container } = renderWithTheme(<Bar />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
