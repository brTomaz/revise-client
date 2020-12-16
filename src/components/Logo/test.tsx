import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal Logo by default', () => {
    const { container } = render(<Logo />)

    expect(screen.getByRole('figure')).toHaveStyle({
      width: '18rem'
    })

    expect(container).toMatchSnapshot()
  })

  it('should render a minimal Logo when hideOnMobile is passed', () => {
    render(<Logo hideOnMobile />)

    expect(screen.getByRole('figure')).toHaveStyleRule('width', '4.2rem', {
      media: '(max-width: 768px)'
    })
  })
})
