import { renderWithTheme } from 'utils/tests/helpers'
import Toast from '.'

describe('<Toast />', () => {
  it('should Toast render with styles', () => {
    const { container } = renderWithTheme(<Toast />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
